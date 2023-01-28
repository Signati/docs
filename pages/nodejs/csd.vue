<template>
  <section>
    <h3 class="display-1 basil--text">
      #CSD
    </h3>
    <br>
    <p>
      La funcion certificar extra la informacion del cer y decodifica el numero del certificado y las anexa en la
      propiesades del xml para poder ser sellada. La funcion sellar anexa un sello unico en base a todo el xml y la key
    </p>
    <Markup language="typescript"
            :code="`
import { cer, key } from '@cfdi/csd';

  const filCer = /home/certificados/LAN7008173R5.cer.pem';
  const filkey = /home/certificados/LAN7008173R5.key.pem';
  console.log(fil, filkey);

  cer.setFile(filCer);
  key.setFile(filkey, '12345678a');

   const cerOBj =  {
      //data: cer.getData(),
      version: cer.version(),
      serial: cer.serial(),
      cer: cer.getNoCer(),
      pubkey: cer.pubkey({ begin: true }),
      //module: cer.modulu(),
      // subjectHash: cer.subjectHash(),
      // issuerHash: cer.issuerHash(),
      // ocspid: cer.ocspid(),
      // hash: cer.hash(),
      // subjectHashOld: cer.subjectHashOld(),
      // issuerHashOld: cer.issuerHashOld(),
      issuer: cer.issuer(),
      subject: cer.subject(),
      valid: cer.date(),
    },
    console.log(cerOBj)
    `"
    ></Markup>
    <br>
    <Markup
    :code='`
{
   "cer":{
      "version":2,
      "serial":"3230303031303030303030333030303232383135",
      "cer":"20001000000300022815",
      "pubkey":"-----BEGIN PUBLIC KEY---------END PUBLIC KEY-----",
      "issuer":{
         "commonName":"A.C. 2 de pruebas(4096)",
         "organizationName":"Servicio de AdministraciÃ³n Tributaria",
         "organizationalUnitName":"AdministraciÃ³n de Seguridad de la InformaciÃ³n",
         "emailAddress":"asisnet@pruebas.sat.gob.mx",
         "streetAddress":"Av. Hidalgo 77, Col. Guerrero",
         "postalCode":"06300",
         "countryName":"MX",
         "stateOrProvinceName":"Distrito Federal",
         "localityName":"CoyoacÃ¡n",
         "undefined":"SAT970701NN3",
         "unstructuredName":"Responsable: ACDMA"
      },
      "subject":{
         "commonName":"CINDEMEX SA DE CV",
         "organizationName":"CINDEMEX SA DE CV",
         "serialNumber":" / FUAB770117MDFRNN09",
         "organizationalUnitName":"Prueba_CFDI"
      },
      "valid":{
         "startDate":"25/10/2016 16:52:11.000",
         "endDate":"25/10/2020 16:52:11.000"
      }
   }
}
    `'
    language="xml"
    >

    </Markup>
  </section>

</template>

<script lang="ts">
import { defineComponent, onMounted, useStore } from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  components: {
    Markup
  },
  setup() {
    const { commit } = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [

      ])
    })
    return {}
  }
})
</script>

<style scoped>

</style>
