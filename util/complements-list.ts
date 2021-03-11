export const complementsList = [
  {
    uuid: 'ine',
    table: [
      {
        data: [
          {
            "function": "Construtor",
            "type": "XmlIneAttribute",
            "properties": "Version: string;TipoProceso: TipoProcesoIne;TipoComite?: TipoComiteIne;IdContabilidad?: string;",
            "enum": "",
            "descripcion": "Inicializa la clase"
          },
          {
            "function": "Entidad",
            "type": "XmlIneEntidadAttribute",
            "properties": "ClaveEntidad: ClaveEntidadIne;Ambito?: AmbitoIne;",
            "enum": "",
            "descripcion": ""
          },
          {
            "function": "Contabilidad",
            "type": "XmlIneContabilidadAttribute",
            "properties": "IdContabilidad: string;",
            "enum": "",
            "descripcion": ""
          }
        ]
      }
    ],
    markup: [
      {
        code: `
import { Ine } from '@signati/core';
const ine = new Ine({
      Version: '1.0',
      TipoProceso: 'Ordinario',
      IdContabilidad: '9',
      TipoComite: 'Ejecutivo Estatal',
    });
    ine.Entidad({ Ambito: 'Federal', ClaveEntidad: 'ROO' });
    ine.Contabilidad({ IdContabilidad: '9' });
    this.cfd.complemento(ine);
          `,
        language: 'typescript'
      },
      {
        code: `<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
  <ine:INE Version="1.0" TipoProceso="Ordinario" IdContabilidad="9" TipoComite="Ejecutivo Estatal">
   <ine:Entidad Ambito="Federal" ClaveEntidad="ROO">
     <ine:Contabilidad IdContabilidad="9"/>
   </ine:Entidad>
  </ine:INE>
</cfdi:Complemento>`,
        language: 'xml'
      }
    ]
  }
]
