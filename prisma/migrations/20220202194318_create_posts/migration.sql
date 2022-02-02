-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "autor" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "likes" INTEGER DEFAULT 0,
    "views" INTEGER DEFAULT 0,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coments" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "coments" TEXT NOT NULL,
    "user_name" TEXT,

    CONSTRAINT "Coments_pkey" PRIMARY KEY ("id")
);
