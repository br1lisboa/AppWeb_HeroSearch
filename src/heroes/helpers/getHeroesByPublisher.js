import { heroes } from "../data/hero";

export const getHeroByPublisher = (publisher) => {

    // console.log(heroes)

    const validPublishers = ['DC Comics', 'Marvel Comics']

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} no es una categoria valida`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)

}