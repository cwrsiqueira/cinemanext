/* eslint-disable import/no-anonymous-default-export */
import { apiBase, apiKey } from "../../lib/tmdb"

export default async (req, res) => {
    const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&query=${req.query.q}&language=pt-BR`)
    const json = await result.json()

    res.status(200).json({
        list: json.results
    })
  }