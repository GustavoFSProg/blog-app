import { Request, Response } from 'express'

import { PrismaClient } from '@prisma/client'
const { promisify } = require('util')
import fs from 'fs'
const unlink = promisify(fs.unlink)

const prisma = new PrismaClient()

async function register(req: Request, res: Response) {
  try {
    const { filename: image }: any = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await prisma.posts.create({
      data: {
        title: req.body.title,
        autor: req.body.autor,
        image: filename,
        text: req.body.text,
        likes: Number(req.body.likes),
        views: Number(req.body.views),
      },
    })

    return res.status(201).send({ message: 'Product Created with success!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await prisma.posts.findMany()
    return res.status(200).send({ data })
  } catch (error) {
    return res.status(400).send({ message: 'DEU ERRO!' })
  }
}

export default { register, getAll }
