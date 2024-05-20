import Fastify from "fastify";

const fastify = Fastify({ logger: false });

fastify.get("/", async function handler(_, reply) {
  reply.send(` ${new Date().toISOString()} - Hello, world!`);
});

try {
  await fastify.listen({ port: 3000, host: "0.0.0.0" });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
