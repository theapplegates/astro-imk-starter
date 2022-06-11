import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Living Life',
    title: 'Living Life',
    description: 'Follow my daily hijinks here. A lot of science-related stuff, and some serious subjects like cancer. Fuck cancer.',
    url: 'https://ink.paulapplegate.com',
    githubUrl: 'https://github.com/astro-imk-starter',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
