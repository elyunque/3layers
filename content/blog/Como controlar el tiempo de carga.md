---
title: "¿Como controlar el tiempo de carga de un Portal Web?"
subtitle: "¿Como controlar el tiempo de carga de un Portal Web?"
date: 2020-08-24T11:27:54.000-04:00
sitemaps: true
thumbnail: images/blog/pageload.jpg
author: Henry Pimentel

---
Hoy en día la velocidad lo es todo, vivimos en un mundo donde las informaciones se requieren de manera instantánea, esto no escapa a su Portal Web o servicio Web de cualquier tipo, ya que en caso contrario unos segundos de tardanza afectan la usabilidad de la página y con ello el abandono de los visitantes puede ser alta por esta razón. Google basa su algoritmo de búsqueda en la consideración de que la velocidad de carga de página es uno de los 200 factores que influyen en la posición del sitio web entre los resultados de búsqueda orgánica y, definitivamente, Google da por entendido que la experiencia del usuario se enriquece con la velocidad de carga de un portal. De dos sitios web que están en un mismo nicho, ganara mejor posicionamiento el sitio web que presente una carga más rápida de sus recursos y presente la información al visitante con premura. El portal más lento es probable que pierdas visitas y que estas opten por algún sitio de la competencia en cuestión de segundos, que le presente la información buscada con mayor prontitud.

Con los siguientes puntos que daremos a continuación podrás tener el conocimiento necesario tanto para accionar, así como, para dirigir a tu desarrollador del Portal Web en el camino donde quiere que vaya tu negocio online. Te presentamos algunos consejos que pueden apoyarte en la búsqueda de optimizar el tiempo de carga de tu sitio web:

**Formato y tamaño de las imágenes optimizados**

En el mayor de los casos cuando se desarrolla un Portal Web se busca “impactar al usuario”, imágenes enormes, muchos colores que definan los valores de la compañía, varios efectos de transición de entrada y salida; como si estuviéramos hablando de un recurso infinito, y es en ese punto donde se cae en un error, pensar en un sitio web como un recurso infinito que siempre entregara el mejor rendimiento hagamos lo que hagamos.
Las imágenes de gran resolución ralentizan su página web lo cual crea una experiencia del usuario inferior en comparación con otros Portales Web de la competencia. Al optimizar las imágenes es el proceso de disminuir el tamaño de su archivo mediante el uso de un plugin o script el cual en cambio acelera el tiempo de carga de su sitio web. Compresión sin pérdida es el método idóneo para trabajar con sus imágenes.
Además, puedes utilizar herramientas de optimización de imágenes, que comprimen la imagen para reducir aún más su tamaño:

* Optimizilla
* Smush.it
* Online Image Optimizer
* I Love IMG

Para conseguir que el tiempo de carga de tu página esté optimizado, se recomienda utilizar formatos de imagen estándar, como JPG, PNG y GIF. Pero si deseas realmente conseguir un verdadero rendimiento te recomendamos convertir todas tus imágenes a formato WebP.
Entre las ventajas del formato WebP está la compresión sin pérdida, la cual se basa en distintas técnicas que transforman los parámetros y los datos de la imagen, dando como resultado una imagen hasta 90% más reducida y con la misma calidad que la original.

**Optimiza las dependencias**

**Complementos**: estos elementos necesarios en un sitio web para poder utilizar funciones de terceros; como, por ejemplo, los complementos para compartir en redes sociales son imprescindibles hoy en día o para automatizar el área de comentarios. Tomando en cuenta que estas herramientas externas poseen un tiempo de carga autónomo (el cual no podemos contralar) contribuyen a reducir los tiempos de respuesta del sitio web. Siempre es recomendable verificar si existe una alternativa optimas al complemento que se está utilizando.

Herramientas de monitoreo: todos deseamos tener estadísticas de tráfico de nuestro sitio web, pero debemos de evitar a toda costa utilizar más de un sistema de monitoreo, por ejemplo, Si utilizas un sistema de gestión de contenidos como WordPress, deberías permitir ejecutar scripts o bien a WP-Stats o bien a Google Analytics, pero no a ambos.

Sistemas de gestión de contenidos: Si utilizas WordPress o Joomla, siempre debe de revisar las actualizaciones de estos softwares con una frecuencia no mayor a semanal. En la medida de los posible aplica primero las actualizaciones en un servidor independiente para probarlas, o realiza un respaldo completo del sitio web antes de aplicarlas para poder tener punto de recuperación en caso de que las cosas no salgan bien. Mantener las actualizaciones de software al día también mejora la velocidad del sitio.

**Evita archivos JS y CSS dentro del HTML**

Es una buena práctica nunca colocar código JS y CSS de tu sitio web en archivos HTML o PHP directamente. Si no crear archivos externos para estos fines, ya que como el navegador almacena estos archivos de forma externa en la memoria caché, apoyo el rendimiento de carga al reducir el tiempo de carga de la página en las solicitudes posteriores. Es más, tener el código JS y CSS en archivos externos facilita el mantenimiento del sitio, ya que se hace más fácil identificar cada módulo o función JS o cada diseño CSS de manera independiente.

**Optimiza el almacenamiento en caché**

Cuando un visitante entra a un sitio web, los archivos de imágenes, CSS y Java de tu página web son cargados elemento por elemento, en general estos 3 elementos son los que consumen más recursos de carga en un portal web. Si el proceso de almacenamiento en caché está bien configurado, tu navegador puede almacenar estos recursos o archivos para las solicitudes posteriores. Esto aporta a que cuando se carga varias veces una misma página del portal web, estos archivos pueden recuperarse de la memoria caché del cliente en lugar de descargarse de nuevo a través de la red. Esta opción reduce el coste de ancho de banda y de alojamiento.

Puedes utilizar encabezados "Expires para los componentes estáticos del sitio y encabezados "Cache-Control" para los dinámicos. El uso de estos encabezados permite almacenar en caché los distintos componentes de un sitio, incluidos scripts, contenido flash, imágenes y hojas de estilos, lo que a su vez minimiza el número de solicitudes HTTP y, por tanto, mejora el tiempo de carga de la página. Con el uso de encabezados «Expires» puedes controlar el tiempo máximo que pueden utilizar los componentes de una página web para almacenarse en caché, como se muestra en el siguiente ejemplo:

_Expires: Wed, 20 Apr 2015 20:00:00 GMT_

Si tu servidor es Apache, puedes establecer el tiempo para el contenido en caché con la directiva «ExpiresDefault», que define la fecha de caducidad como un número de años a partir de la fecha actual:

_ExpiresDefault “access plus 15 years”_

**Evita los scripts que bloquean la renderización**

Haz referencia de los archivos JavaScript al final del cuerpo de la página o utiliza el atributo «async» para cargarlos de forma asíncrona.

El portal web no será desplegado o la visualización completa del portal no será efectiva hasta que todo el HTML y CSS del portal sean leídos e interpretado por el navegador de Internet, esto quiere decir que, si colocamos las referencias de archivos JS en la parte superior o como parte del cuerpo del HTML, nuestro navegador al momento de visitar un portal web tendrá que esperar la carga del JS para poder desplegar el sitio web. Esto podría significar varios segundos extra de carga que darán como resultado un portal con una experiencia de carga afectada. Por esta razón todos los scripts de JS deben ir al fondo del HTML.

**Evita los redireccionamientos**

Evita en la medida de lo posible realizar redireccionamiento a otros recursos externos del portal. Estamos claro que, algunos redireccionamientos son inevitables y deben utilizarse, pero convienen ser evitado en la mayoría de los casos, ya que esto consume un tiempo de carga.

**Configura la codificación G-Zip**

Cuando alguien visita tu página, una petición es enviada a tu servidor para que entregue los archivos necesarios para que esta cargue. Entre más grandes sean estos archivos, más tiempo se tardará en cargar la página. Comprimir tu página y el CSS antes de enviarlo al navegador es una excelente forma de reducir significativamente el tiempo de carga al hacer que los archivos sean más pequeños, para eso tenemos la herramienta de compresión GZIP.

**Reduce las solicitudes HTTP**

CSS Sprites, en cargar una imagen que contiene a varias imágenes más pequeñas separadas entre sí, evitando así descargarlas individualmente reduciendo el número de peticiones HTTP al servidor y por tanto la velocidad de carga de la página web.
Aunque pudiéramos pensar que es lo mismo descargar 5 imágenes de 10Kb que una de 50Kb, esto no es verdad puesto que deberemos tener en cuenta que para cada imagen necesitaremos una conexión nueva que además llevará asociadas una serie de cabeceras que también aumentarán el tamaño de las peticiones.

Combina las imágenes de fondo en una sola imagen utilizando los elementos CSS «background-image» y «background-position». Combina las imágenes internas con tus hojas de estilos almacenadas en caché. Del mismo modo, combina todos tus archivos JavaScript en un archivo individual, así como todos tus archivos CSS en otro.

**Minifica el código JavaScript y CSS**

La minificación de archivos es la reducción del contenido de un archivo CSS, JS, HTML o cualquier otro, removiendo los caracteres que no son necesarios del mismo, también cambiar nombres de variables y referencias a su mínima expresión. Esto hace que el archivo se reduzca en tamaño y permita una carga más rápida.

**Reduce el tamaño de las cookies**

Realizar cookies inteligentes que solo envíen datos realmente necesarios, reducir los envíos de cookies en cuanto a la cantidad de datos que se tramitan reduce el tiempo de carga. Además, aumenta el tiempo de vida de las cookies así puede enviar su carga constante al momento de refrescar la página web.