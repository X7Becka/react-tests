import URL from 'url-parse'
import {GithubReposTPagination} from '../redux/types/github-repos'

export const numToStr = (val: number, textForms: string[]): string => {
    // textForms: ["час", "часа", "часов"]
    const n = Math.abs(val) % 100
    const n1 = val % 10

    if (n > 10 && n < 20) {
        return textForms[2]
    }
    if (n1 > 1 && n1 < 5) {
        return textForms[1]
    }
    if (n1 === 1) {
        return textForms[0]
    }
    return textForms[2]
}

export const githubAPIv3PaginationParser = (link: string): any => {
    if (link.length === 0) {
        throw new Error('link is not valid string')
    }

    const lines = link.split(',')
    const matches = lines.map((line) => {
        const match = line.match(/<(.+?)>; rel="(.+?)"/)
        if (match === null) {
            throw new Error('link is not valid string')
        }

        const {query} = new URL(match[1], true)
        return {
            url: match[1],
            type: match[2],
            num: Number(query.page),
        }
    })

    return matches.reduce(
        (acc, value) => ({
            ...acc,
            [value.type]: {
                url: value.url,
                num: value.num,
            },
        }),
        {},
    )
}
