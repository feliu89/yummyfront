import prisma from "../utils/prismaClient";

export const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

export const getProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      company: true,
      inventory: true,
    },
  });
  return product;
};

export const createProduct = async (data) => {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      company: {
        connect: { id: parseInt(data.companyId) },
      },
      inventory: {
        create: {
          quantity: parseInt(data.quantity),
        },
      },
    },
    include: {
      company: true,
      inventory: true,
    },
  });
  return product;
};
