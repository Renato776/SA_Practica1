# Practica 5
## Arquitectura
![image](images/arquitectura.png)

## Balanceador de Carga

## VPCs
Una VPC es la implementación de AWS de una red. Tal como una red real, esta puede ser pública o privada. Una VPC puede segmentarse
una o más subredes.
![image](images/vpc.png)

### Subred
Es la forma que Amazon VPC tiene para crear particiones de una misma red privada. Esta subred actúa como una red por sí misma,
con su propia tabla de enrutado para la gestión del tráfico de las instancias dentro de la propia red. Se utilizaron dos subredes para
la práctica. Una privada y una pública.
![image](images/subredes.png)

#### VPC pública
Se configuró una VPC pública donde se alojan dos máquinas virtuales que sirven la página web principal por medio de un balanceador
de carga, tal como se muestra en el diagrama de la arquitectura propuesta.
![image](images/tabla-subred.png)

#### VPC privada
Esta VPC es privada y solamente puede ser accedida desde otros servicios de AWS en la misma VPC. Esta subred aloja una única máquina
virtual que contiene un simple archivo de texto. Para conectarse a esta máquina solo será posible desde una de las máquinas virtuales
de la VPC pública.

### Tabla de enrutado
Se utilizan para redireccionar el tráfico dentro de la red de forma correcta. Una misma tabla de enrutado puede tener varias subredes
asociadas pero una subred sólo puede tener una tabla de enrutada asociada al mismo tiempo.
![image](images/tablas-1.png)


### Puerta de enlace a internet
La herramienta necesaria para que las instancias dentro de una red puedan comunicarse con equipos conectados a internet. Por otro lado,
realiza NAT (network address translation) para aquellas instancias a las que se les haya asignado una IP pública. Además también
puede crear una puerta de enlace privada virtual para que la red corporativa de su empresa pueda acceder a los recursos dentro de 
Amazon VPC.
![image](images/ig.png)
