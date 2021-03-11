export const complementsList = [
  {
    uuid: 'ine',
    title: 'INE',
    table: [
      {
        title: 'INE',
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
  },
  {
    uuid: 'pago10',
    title: 'PAGO10',
    table: [
      {
        title: 'PAGO10',
        data: [
          {
            "function": "Construtor",
            "type": "XmlPagos10Attributes",
            "properties": "Version?: string;",
            "enum": "",
            "descripcion": "Inicializa la clase"
          },
          {
            "function": "pago",
            "type": "data: XmlPago10Attributes impuestos?: XmlPago10Impuesto[] relacionado?: XmlDoctoRelacionado[]",
            "properties": `
            <td align="center">FechaPago: string;<br>FormaDePagoP: string;<br>MonedaP: string;<br>TipoCambioP?: string;<br>Monto: string;<br>NumOperacion?: string;<br>RfcEmisorCtaOrd?: string;<br>NomBancoOrdExt?: string;<br>CtaOrdenante?: string;<br>RfcEmisorCtaBen?: string;<br>CtaBeneficiario?: string;<br>TipoCadPago?: string;<br>CertPago?: string;<br>CadPago?: string;<br>SelloPago?: string;</td>
            `,
            "enum": '',
            "descripcion": ""
          }
        ]
      },
      {
        title: 'PAGO10-RELACIONADO',
        data: [
          {
            "function": "Construtor",
            "type": "XmlDoctoRelacionado",
            "properties": "_attributes?: XmlDoctoRelAttributes",
            "enum": "",
            "descripcion": "Inicializa la clase"
          },
          {
            "function": "relacion",
            "type": "XmlDoctoRelAttributes",
            "properties": `
            IdDocumento: string,<br>Serie?: string,<br>Folio?: string,<br>MonedaDR: string,<br>TipoCambioDR?: string,<br>MetodoDePagoDR: string,<br>NumParcialidad?: string,<br>ImpSaldoAnt?: string,<br>ImpPagado?: string,<br>ImpSaldoInsoluto?: string
            `,
            "enum": "",
            "descripcion": ""
          }
        ]
      },
      {
        title: 'PAGO10-IMPUESTOS',
        data: [
          {
            "function": "Construtor",
            "type": "XmlPagoImptoAttributes",
            "properties": "TotalImpuestosRetenidos?: string;TotalImpuestosTrasladados?: string;",
            "enum": "",
            "descripcion": "Inicializa la clase"
          },
          {
            "function": "traslados",
            "type": "XmlPagoTranladoAttributes",
            "properties": "Impuesto: string;TipoFactor: string;TasaOCuota: string;Importe: string;",
            "enum": "",
            "descripcion": "Agregar la entidad"
          },
          {
            "function": "retenciones",
            "type": "XmlPagoRetencionAttributes",
            "properties": "Impuesto: string;Importe: string;",
            "enum": "",
            "descripcion": ""
          }
        ]
      }
    ],
    markup: [
      {
        language: 'typescript',
        code: `
        import { pago10 } from '@signati/core';

const pago = new Pago10({
      Version: '1.0',
    });
    const docRela = new Pago10Relacionado();
    docRela.relacion({
      IdDocumento: 'hasd',
      MonedaDR: 'MMX',
      MetodoDePagoDR: 'PUE',
    });
    docRela.relacion({
      IdDocumento: 'hasd',
      MonedaDR: 'MMX',
      MetodoDePagoDR: 'PUE',
    });
    const impuesto = new Pago10Impuestos({
      TotalImpuestosRetenidos: '12',
      TotalImpuestosTrasladados: '234z ',
    });
    impuesto.traslados({
      Importe: '100',
      Impuesto: '1201',
      TasaOCuota: '123',
      TipoFactor: '%',
    });
    impuesto.retenciones({ Importe: '10', Impuesto: '10' });
    const impuesto2 = new Pago10Impuestos({
      TotalImpuestosRetenidos: '12',
      TotalImpuestosTrasladados: '234z ',
    });
    impuesto2.traslados({
      Importe: '100',
      Impuesto: '1201',
      TasaOCuota: '123',
      TipoFactor: '%',
    });
    impuesto2.retenciones({ Importe: '10', Impuesto: '10' });
    pago.pago({
      data: {
        FechaPago: '2019-11-27T00:00:00',
        FormaDePagoP: '03',
        MonedaP: 'MXN',
        Monto: '5220.00',
        NumOperacion: '1',
        RfcEmisorCtaOrd: 'SEQ920520ME3',
        NomBancoOrdExt: 'BBVA Bancomer',
        RfcEmisorCtaBen: 'WSI1503194J6',
        CtaBeneficiario: '0101255614',
      },
      relacionado: docRela.getRelations(),
      impuestos: [impuesto.getImpuesto(), impuesto2.getImpuesto()],
    });

    this.cfd.complemento(pago);

        `
      },
      {
        language: 'xml',
        code: `
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Complemento>
  <pago10:Pagos Version="1.0">
    <pago10:Pago FechaPago="2019-11-27T00:00:00" FormaDePagoP="03" MonedaP="MXN" Monto="5220.00" NumOperacion="1" RfcEmisorCtaOrd="SEQ920520ME3" NomBancoOrdExt="BBVA Bancomer" RfcEmisorCtaBen="WSI1503194J6" CtaBeneficiario="0101255614">
       <pago10:DoctoRelacionado IdDocumento="hasd" MonedaDR="MMX" MetodoDePagoDR="PUE"/>
       <pago10:DoctoRelacionado IdDocumento="hasd" MonedaDR="MMX"  MetodoDePagoDR="PUE"/>
       <pago10:Impuestos TotalImpuestosRetenidos="12" TotalImpuestosTrasladados="234z ">
         <pago10:Traslados>
           <pago10:Traslado Importe="100" Impuesto="1201" TasaOCuota="123" TipoFactor="%"/>
         </pago10:Traslados>
         <pago10:Retenciones>
           <pago10:Retencion Importe="10" Impuesto="10"/>
         </pago10:Retenciones>
      </pago10:Impuestos>
       <pago10:Impuestos TotalImpuestosRetenidos="12" TotalImpuestosTrasladados="234z ">
         <pago10:Traslados>
           <pago10:Traslado Importe="100" Impuesto="1201" TasaOCuota="123" TipoFactor="%"/>
         </pago10:Traslados>
         <pago10:Retenciones>
           <pago10:Retencion Importe="10" Impuesto="10"/>
         </pago10:Retenciones>
      </pago10:Impuestos>
    </pago10:Pago>
  </pago10:Pagos>
</cfdi:Complemento>
        `
      }
    ]
  },
  {
    uuid: 'cce11',
    title: 'CCE11',
    table: [
      {
        title: 'CCE11',
        data: [
          {
            "function": "Construtor",
            "type": "XmlCce11Attributes",
            "properties": "Version: string;MotivoTraslado?: string;TipoOperacion: string;ClaveDePedimento?: string;CertificadoOrigen?: string;NumCertificadoOrigen?: string;NumeroExportadorConfiable?: string;Incoterm?: string;Subdivision?: string;Observaciones?: string;TipoCambioUSD?: string;TotalUSD?: string;",
            "enum": "",
            "descripcion": "Inicializa la clase"
          },
          {
            "function": "Emisor",
            "type": "XmlCce11EmisorAttributes",
            "properties": "Curp?: string;",
            "enum": "",
            "descripcion": ""
          },
          {
            "function": "Propietario",
            "type": "XmlCce11PropietarioAttributes",
            "properties": "NumRegIdTrib: string;ResidenciaFiscal: string;",
            "enum": "",
            "descripcion": ""
          },
          {
            "function": "Receptor",
            "type": "XmlCce11ReceptorAttributes",
            "properties": "NumRegIdTrib?: string;",
            "enum": "",
            "descripcion": ""
          },
          {
            "function": "Destinatario",
            "type": "XmlCce11DestinatarioAttributes",
            "properties": "NumRegIdTrib?: string;Nombre?: string;",
            "enum": "",
            "descripcion": ""
          },
          {
            "function": "Mercancias",
            "type": "XmlCce11MercanciaAttributes",
            "properties": "oIdentificacion: string;FraccionArancelaria?: string;CantidadAduana?: string;UnidadAduana?: string;ValorUnitarioAduana?: string;ValorDolares: string;",
            "enum": "",
            "descripcion": ""
          }
        ]
      }
    ],
    markup: [
      {
        language: 'typescript',
        code: `
      import { cce11 } from '@signati/core';
const cce11 = new Cce11({ Version: '1.1', TipoOperacion: 'exportacion' });
   cce11.Emisor({ Curp: 'MACA0012KSHDSADS' }, {
     Pais: 'MX',
     Estado: 'QROO',
     Calle: 'av. colosio',
     CodigoPostal: '77728',
   });
   cce11.Propietario({ NumRegIdTrib: '0016', ResidenciaFiscal: 'cresencio' });
   cce11.Propietario({ NumRegIdTrib: '0017', ResidenciaFiscal: 'steeve' });
   cce11.Receptor({ NumRegIdTrib: 'aaa' }, {
     Pais: 'MX',
     Estado: 'QROO',
     Calle: 'av. colosio',
     CodigoPostal: '77728',
   });
   cce11.Destinatario({ Nombre: 'arturos', NumRegIdTrib: '2' });
   cce11.Destinatario({ Nombre: 'arturos', NumRegIdTrib: '2' }, {
     Pais: 'MX',
     Estado: 'QROO',
     Calle: 'av. colosio',
     CodigoPostal: '77728',
   });

   cce11.Mercancias({ NoIdentificacion: 'misael', ValorDolares: 'JSON' });
   cce11.Mercancias({ NoIdentificacion: 'misael', ValorDolares: 'JSON' }, [{ Marca: 'webtel' }, { Marca: 'webtela' }]);
   cce11.Mercancias({
     NoIdentificacion: 'misael',
     ValorDolares: 'JSON',
   }, [{ Marca: 'webtel', Modelo: '000aa' }, { Marca: 'wal', SubModelo: 'asaa' }, { Marca: 'webtela' }]);

   this.cfd.complemento(cce11);
        `
      },
      {
        language: 'xml',
        code: `
<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
 <cce11:ComercioExterior Version="1.1" TipoOperacion="exportacion">
  <cce11:Emisor Curp="MACA0012KSHDSADS">
   <cce11:Domicilio Pais="MX" Estado="QROO" Calle="av. colosio" CodigoPostal="77728"/>
  </cce11:Emisor>
  <cce11:Propietario NumRegIdTrib="0016" ResidenciaFiscal="cresencio"/>
  <cce11:Propietario NumRegIdTrib="0017" ResidenciaFiscal="steeve"/>
  <cce11:Receptor NumRegIdTrib="aaa">
   <cce11:Domicilio Pais="MX" Estado="QROO" Calle="av. colosio" CodigoPostal="77728"/>
  </cce11:Receptor>
  <cce11:Destinatario Nombre="arturos" NumRegIdTrib="2"/>
  <cce11:Destinatario Nombre="arturos" NumRegIdTrib="2">
   <cce11:Domicilio Pais="MX" Estado="QROO" Calle="av. colosio" CodigoPostal="77728"/>
  </cce11:Destinatario>
  <cce11:Mercancias>
   <cce11:Mercancia NoIdentificacion="misael" ValorDolares="JSON"/>
   <cce11:Mercancia NoIdentificacion="misael" ValorDolares="JSON">
    <cce11:DescripcionesEspecificas Marca="webtel"/>
    <cce11:DescripcionesEspecificas Marca="webtela"/>
  </cce11:Mercancia>
   <cce11:Mercancia NoIdentificacion="misael" ValorDolares="JSON">
    <cce11:DescripcionesEspecificas Marca="webtel" Modelo="000aa"/>
    <cce11:DescripcionesEspecificas Marca="wal" SubModelo="asaa"/>
    <cce11:DescripcionesEspecificas Marca="webtela"/>
   </cce11:Mercancia>
  </cce11:Mercancias>
 </cce11:ComercioExterior>
</cfdi:Complemento>

        `
      }
    ]
  }
]
