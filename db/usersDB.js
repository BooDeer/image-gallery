import { Level } from 'level'

export const db = new Level('./db/db', {valueEncoding: 'json'})