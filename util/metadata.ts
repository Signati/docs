import { MetaInfo } from "vue-meta";

export function genAppMetaInfo(defaults: Metadata) {
  // @ts-ignore
  const metadata = genMetaInfo(...Object.values(defaults));
  metadata.link?.push(...genLink())
  metadata.meta?.push(...genMeta())

  return metadata
}

export function genFacebookMetaInfo(args: string) {
  return parseMeta('fb', { app_id: '' })
}

export function genLink() {
  const rels = ['preconnect', 'dns-prefetch']
  const hrefs = [
    // 'https://api.cosmicjs.com/',
    // 'https://cdn.carbonads.com/',
    // 'https://srv.carbonads.net/',
    'https://www.google-analytics.com/',
  ]
  const link = [
    { rel: 'shortcut icon', href: '/favicon.ico' },
   // { rel: 'manifest', href: '/manifest.json' },
    {
      rel: 'search',
      type: 'application/opensearchdescription+xml',
      href: '/search.xml',
      title: 'Signati',
    },
  ]

  for (const rel of rels) {
    for (const href of hrefs) {
      link.push({ rel, href })
    }
  }

  return link
}

export function genOpenGraphMetaInfo(args: Metadata) {
  return parseMeta('og', {
    description: args.description,
    image:'https://docs.signati.app/logo.png',
    site_name: 'Signati',
    title: args.title,
    type: 'website',
  })
}

interface Metadata {
  [key: string]: string;
}

export function parseMeta(prefix: string, metadata: Metadata) {
  const meta = []

  for (const key in metadata) {
    const content = metadata[key]
    const property = `${prefix}:${key}`

    meta.push({
      vmid: property,
      property,
      content,
    })
  }

  return meta
}

export function genMeta() {
  return [
    { charset: 'utf-8' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5, minimal-ui',
    },
  ]
}

export function genMetaInfo(title: string, description: string, keywords: string): MetaInfo {
  const length = description.length

  description = length <= 117
    ? description
    : `${description.slice(0, 116)}...`

  const options = {
    description,
    keywords,
    title,
  }

  return {
    link: [],
    meta: [
      { vmid: 'description', name: 'description', content: description },
      { vmid: 'keywords', name: 'keywords', content: keywords },
      // ...genFacebookMetaInfo(options),
      ...genOpenGraphMetaInfo(options),
      ...genTwitterMetaInfo(),
    ],
    title,
  }
}

export function genTwitterMetaInfo() {
  return parseMeta('twitter', {
    card: 'https://docs.signati.app/logo.png',
    domain: 'https://docs.signati.app/',
    site: 'Signati',
  })
}
