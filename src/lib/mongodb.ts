import { MongoClient } from "mongodb";

type ClickDoc = { _id: string; count: number };

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

// 개발 모드에서 핫 리로드마다 연결이 새로 생기지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

async function getClicksCollection() {
  const clientPromise = getClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(dbName).collection<ClickDoc>("clicks");
}

// MONGODB_URI가 없거나 DB 오류가 나도 페이지는 0회로 표시되도록 빈 객체를 돌려줍니다.
export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const clicks = await getClicksCollection();
    if (!clicks) return {};
    const docs = await clicks.find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return {};
  }
}

export async function incrementClick(linkId: string): Promise<boolean> {
  const clicks = await getClicksCollection();
  if (!clicks) return false;
  await clicks.updateOne(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true },
  );
  return true;
}
