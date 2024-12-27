-- CreateTable
CREATE TABLE "Auth" (
    "ID" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Users" (
    "ID" SERIAL NOT NULL,
    "authId" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auth_email_key" ON "Auth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_authId_key" ON "Users"("authId");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_authId_fkey" FOREIGN KEY ("authId") REFERENCES "Auth"("ID") ON DELETE CASCADE ON UPDATE CASCADE;
