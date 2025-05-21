import bcrypt from "bcrypt";
import prisma from "../../prisma";
import RegisterDTO from "../../schemas/userSchema";

export const registerUser = async ({
  name,
  email,
  password,
  imageProfile = "/images/user.png",
}: RegisterDTO) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error("Email já cadastrado.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      imageProfile, // Agora reconhecido corretamente
    },
    select: {
      id: true,
      name: true,
      email: true,
      imageProfile: true,
    },
  });

  return user;
};
