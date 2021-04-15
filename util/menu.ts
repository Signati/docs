import {RoutePath} from "~/types/RoutePath";

export const menu: RoutePath[] = [
  {
    id: 1,
    isActive: 1,
    throughout: true,
    name: 'Getting started',
    fatherID: 1,
    level: '1',
    url: '',
    icon: '',
    children: [],
    langs: []
  },
  {
    id: 2,
    isActive: 1,
    throughout: true,
    name: 'Installation',
    fatherID: 1,
    level: '1',
    url: '/getting-started/installation',
    icon: '',
    children: [],
    langs: []
  },
  {
    id: 3,
    isActive: 1,
    throughout: false,
    name: 'Support for plugins',
    fatherID: 1,
    level: '1',
    url: '/support-for-plugins',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 4,
    isActive: 1, throughout: true,
    name: 'Official Information',
    fatherID: 1,
    level: '1',
    url: '/getting-started/official-information',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 5,
    isActive: 1, throughout: true,
    name: 'Generate PEM files',
    fatherID: 1,
    level: '1',
    url: '/getting-started/generate',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 5,
    isActive: 1, throughout: true,
    name: 'Generate QR',
    fatherID: 1,
    level: '1',
    url: '/getting-started/generate-qr',
    icon: 'mdi-qrcode-edit',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 7,
    isActive: 1, throughout: false,
    name: 'Example',
    fatherID: 1,
    level: '1',
    url: '/example',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 8,
    isActive: 1, throughout: false,
    name: '@signati/core',
    fatherID: 1,
    level: '1',
    url: '',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'CFDI',
    fatherID: 1,
    level: '1',
    url: '/cfdi',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'Emisor',
    fatherID: 1,
    level: '1',
    url: '/emisor',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'Receptor',
    fatherID: 1,
    level: '1',
    url: '/receptor',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'Relacionado',
    fatherID: 1,
    level: '1',
    url: '/relacionado',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'Conceptos',
    fatherID: 1,
    level: '1',
    url: '/conceptos/#concepts',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'Impuestos',
    fatherID: 1,
    level: '1',
    url: '/impuestos',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'Complementos',
    fatherID: 1,
    level: '1',
    url: '/complementos/#ine',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'Sellar Xml',
    fatherID: 1,
    level: '1',
    url: '/sellar',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 9,
    isActive: 1, throughout: false,
    name: 'PDF',
    fatherID: 1,
    level: '1',
    url: '/pdf',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
  {
    id: 10,
    isActive: 1, throughout: false,
    name: 'Donaciones',
    fatherID: 1,
    level: '1',
    url: '/donaciones',
    icon: '',
    children: [],
    langs: [
      {
        name: 'nodejs',
        view: true
      },
      {
        name: 'php',
        view: true
      }
    ]
  },
]
