-- CreateTable
CREATE TABLE "student" (
    "major" TEXT NOT NULL,
    "sID" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "school" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("sID")
);
