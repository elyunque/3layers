+++
author = "Henry Pimentel"
date = 2020-04-26T04:00:00Z
sitemaps = true
subtitle = "SSL, CRT, CSR"
thumbnail = "/images/sslcrt.jpg"
title = "SSL, CRT, CSR"

+++
_“Seguridad de la capa de transporte (en inglés: Transport Layer Security o TLS) y su antecesor Secure Sockets Layer (SSL; en español capa de puertos seguros) son protocolos criptográficos, que proporcionan comunicaciones seguras por una red, comúnmente Internet.” **Wikipedia**_.

Inicio con esa definición tomada de Wikipedia para dar una definición bastante técnica de SSL, el cual nace antes de 1995 con la SSL 2.0, y si estuviéramos a inicio de los años 90, no estaríamos hablando de este tema en lo absoluto, pensar en seguridad de la Internet era un peldaño inimaginable en esa fecha. La realidad es que estamos escribiendo este articulo en pleno siglo XXI, tiempos de los programas de vigilancia masiva PRISM/XKeyscore, la NSA y Edward Snowden, que dieron paso a visualizar un mundo donde navegamos todos los días, en el cual somos constantemente vigilados, por gobiernos y entidades comerciales.

De estos hechos nacen muchas herramientas que hasta hace muy poco tiempo no eran mencionadas en los medios comerciales de tecnología, excepto en el bajo mundo de la Internet, donde hackers ocultaban su identidad para navegar y realizar sus actividades cotidianas de investigación y explotación de recursos sin ser detectados. Surgen los VPN, los TSL/SSL son obligatorios para los sistemas de correo electrónicos y portales en Internet son instruidos a adquirirlos para mejorar su SEO, se mejoran los Firewalls y surgen empresas que desarrollan equipos especializados para proteger las periferias de las empresas. Y de esta forma se ve renacida una nueva rama de seguridad de la tecnología destinada a proteger los bienes mas valiosos de las personas y las empresas en un mundo virtual, sus datos.

**CRT, CSR y KEY**

Estas tres cadenas de caracteres componen un identificador de identidad, son un identificador del recurso virtual que está visitando (FQDN). Esto quiere decir, que, si usted visita un recurso, estas cadenas de caracteres son la que ayudan a asegurar que la transmisión de datos sea segura y además, el lugar virtual es quien dice ser.

Imagine que usted visita la página Web de su banco para realizar una consulta de sus productos financieros, y que luego de digitar su usuario y contraseña se da cuenta que la pagina visitada no es su banco, si no, una copia pirateada de este, es altamente probable que ya todos sus fondos hayan sido robados y después comienza el caos.

Como evitamos esta situación, para tales fines, existen los certificados TSL y SSL, como ejemplo digamos que usted visita la página [https://example.com](https://example.com "https://example.com") y este devuelve un certificado "Emitido para:" o “Issued to:” que tiene el mismo nombre que el sitio web que estoy visitando actualmente. Existe varios tipos de certificados como el tipo comodín que cubre el dominio principal example.com y todos los recursos de sus subdominios (ejemplo enlinea.example.com, transacciones.example.com, en general *.example.com).

![SSL Show on Chrome](/images/ssl.JPG "SSL Show on Chrome")

La siguiente parte muestra "Emitido por:" o “Issued by:” y aquí está la gran diferencia entre los certificados auto firmados y los emisores públicos de confianza (como DigiCert, RapidSSL, GeoTrust, Sectigo, Thawte, entre otros). El emisor del certificado auto firmado es juez, jurado y verdugo y nadie puede afirmar ser quien es. Pero dado que el emisor de este certificado no es conocido por nadie excepto por el que genero el certificado, no confiaran en él y esto generara una alerta por su navegador de internet cuando visite el recurso. Esto podemos verlo si removemos el certificado de el recurso anterior example.com y le colocamos un certificado auto firmado recibiremos la siguiente alerta.

![SSL Error on Chrome](/images/errorSSL.png "SSL Error on Chrome")

**Self-Signed (certificado auto firmado) contra un Certificate Authority (Autoridad de Certificado)...**

Supongamos que soy el propietario del dominio bancoseguro.com ¿Cómo puedo generar confianza en mis clientes para que visiten mi portal?

Para cubrir a mis clientes y a mi negocio necesito obtener un certificado de un Emisor (Certificate Authority/CA) conocido y confiable. El CA tiene la responsabilidad de validar y asegurar económicamente todos los certificados que han emitido, y son en general una entidad respetada y autorizada para expedir certificados SSL. Los CA tienen la carga de validar que el dominio bancoseguro.com es propiedad de la empresa Banco Seguro y indemnizar a Banco Seguro si su recurso fuera vulnerado por una falla del certificado emitido por ellos.

**¿Qué pasos debo seguir para obtener una certificación de un CA?**

En este momento revisaremos lo que es la llave (KEY) y la solicitud de firma de certificado (CSR). Pensemos por un momento en el certificado como su domicilio (bancoseguro.com es igual a su dirección física de su negocio). Y la llave es el método para abrir la puerta de su negocio.

Sin la llave en mano, solo podrías ver mi negocio desde la calle, pero nada más. En términos de computadoras, esta "llave" tiene la capacidad de ingresar y descifrar el tráfico hacia y desde el servidor. Y el emisor del certificado (CA) garantiza antes de entregarme un certificado SSL que no le he proporcionado una dirección falsa donde los clientes deben encontrarme (bancoseguro.com en este ejemplo).

**Una llave para abrir mis recursos virtuales**

Necesitamos generar esta clave y debe permanecer confidencial, por lo tanto, no debo nunca compartirla con nadie, ni siquiera con mi CA (seria como entregarle las llaves a alguien de mi empresa, siempre existe la duda de que le hagan una copia). Entonces necesito obtener un certificado que esté vinculada a esta clave privada y esto proviene de un emisor (CA) fuera de mi control. Si les entrego mi llave, pueden obtener control sobre mi tráfico, por lo tanto, surge la pregunta:

**¿Cómo puedo obtener una autorización de mi CA sin entregarle mi llave?**

En este momento entra en juego el CSR. Esta cadena CSR (solicitud de firma de certificado) está generada sobre algoritmos contra mi clave y solo tiene un uso temporal. Esto significa que la clave del recurso nunca se comparte, si no, se hace un CSR que es una cadena intermedia entre la llave de mi recurso y el emisor CA. Con esta cadena intermedia el CA puede generar una clave privada y entregárnosla para ser añadida a nuestro recurso. Esta emisión de certificado por el CA solo se logra cuando se ha pasado un o más requerimientos, dependiendo del tipo de certificado que deseamos obtener.

Algunos certificados como los EV son tan estrictos y fuertes que requieren llamadas telefónicas al negocio, un registro en las bases de datos de impuestos internos de la compañía solicitante, suplir al emisor del certificado de facturas de la empresa solicitante y registros especiales dentro de los DNS de los dominios a los que se desean certificar.

Posterior a la implementación de un certificado SSL en cualquier recurso, cuando un cliente o usuario visita el recurso en cuestión el certificado es validado por la entidad CA autorizada, el cual basándose en la llave privada y la llave publica dan fe de que se esta visitando el recurso certificado, esto así porque ya ha validado que realmente Banco Seguro es dueño del recurso bancoseguro.com.

Para finalizar, si tiene un dominio de desarrollo que desea validar con SSL por un mes, en 3Layers Host contamos con certificados en versión de prueba, que pueden ser expedidos de manera gratuita a nuestros clientes, para conseguir el suyo póngase en contacto con nuestro amable [equipo de ventas de 3Layers Host](https://3layers.host/contact/ "equipo de ventas de 3Layers Host") para obtener ayuda y sugerencias directas.

**Glosario técnico**

_PEM_ del inglés, Privacy Enhanced Mail (Correo mejorado de privacidad); simplemente indica una codificación base64 con líneas de encabezado y pie de página. El correo tradicionalmente solo maneja texto, no binario, que es la mayoría de los datos criptográficos, por lo que se requiere algún tipo de codificación para hacer que el contenido forme parte de un mensaje de correo (en lugar de un archivo adjunto codificado). El contenido del PEM se detalla en la línea de encabezado y pie de página: .pem en sí mismo no especifica un tipo de datos, al igual que .xml y .html no especifican el contenido de un archivo, solo especifican una codificación específica;

_KEY_ puede ser cualquier tipo de clave, pero generalmente es la clave privada: OpenSSL puede ajustar claves privadas para todos los algoritmos (RSA, DSA, EC) en una estructura genérica y estándar PKCS # 8, pero también admite un 'legado separado' 'estructura para cada algoritmo, y ambos siguen siendo ampliamente utilizados a pesar de que la documentación ha marcado PKCS # 8 como superior durante casi 20 años; ambos pueden almacenarse como DER (binario) o codificados por PEM, y tanto PEM como PKCS # 8 DER pueden proteger la clave con encriptación basada en contraseña o no encriptarse;

_CSR_ el inglés, Certificate Signing Request (Solicitud de firma de certificado), contiene información como la clave pública y el nombre común requerido por una autoridad de certificación para crear y firmar un certificado para el solicitante, la codificación podría ser PEM o DER (que es una codificación binaria de un ASN);

_CRT_ significa simplemente un certificado, generalmente un certificado X509v3, nuevamente la codificación podría ser PEM o DER; un certificado contiene la clave pública, pero contiene mucha más información.