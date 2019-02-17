var vp=document.getElementById("villaPlatzi");
var papel=vp.getContext("2d");
var RutaCarpImagen="./images/";
var DesplazamientoPixel=10;

var fondo = {
	url: RutaCarpImagen+"tile.png",
	cargarOK: false
};
var cerdo = {
	cantidad: 0,
	url: RutaCarpImagen+"cerdo.png",
	cargarOK: false
};
var pollo = {
	cantidad: 0,
	url: RutaCarpImagen+"pollo.png",
	cargarOK: false
};
var vaca = {
	cantidad: 0,
	url: RutaCarpImagen+"vaca.png",
	cargarOK: false
};
var lobo = {
	url: RutaCarpImagen+"lobo.png",
	cargarOK: false
};
var tecla = {
	up: 38,
	down: 40,
	left: 37,
	right: 39
};

pollo.cantidad=getNumeroRandom(1,11);
cerdo.cantidad=getNumeroRandom(1,11);
vaca.cantidad=getNumeroRandom(1,11);

pollo.posicionX=[];
pollo.posicionY=[];
for (var i = 0; i < pollo.cantidad; i++) {
	pollo.posicionX[i]=getNumeroRandom(1,7)*60;
	pollo.posicionY[i]=getNumeroRandom(1,7)*60;
}

cerdo.posicionX=[];
cerdo.posicionY=[];
for (var i = 0; i < cerdo.cantidad; i++) {
	cerdo.posicionX[i]=getNumeroRandom(1,7)*60;
	cerdo.posicionY[i]=getNumeroRandom(1,7)*60;
}

vaca.posicionX=[];
vaca.posicionY=[];
for (var i = 0; i < vaca.cantidad; i++) {
	vaca.posicionX[i]=getNumeroRandom(1,7)*60;
	vaca.posicionY[i]=getNumeroRandom(1,7)*60;
}

lobo.posicionX=getNumeroRandom(1,7)*60;
lobo.posicionY=getNumeroRandom(1,7)*60;


fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarImagenFondo);

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarImagenCerdo);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarImagenPollo);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarImagenVaca);

lobo.imagen=new Image();
lobo.imagen.src=lobo.url;
lobo.imagen.addEventListener("load",cargarImagenLobo);

document.addEventListener("keydown", presionarTecla);

function cargarImagenFondo() {
	fondo.cargarOK=true;
	dibujarImagen();
}

function cargarImagenCerdo() {
	cerdo.cargarOK=true;
	dibujarImagen();
}

function cargarImagenPollo() {
	pollo.cargarOK=true;
	dibujarImagen();
}

function cargarImagenVaca() {
	vaca.cargarOK=true;
	dibujarImagen();
}

function cargarImagenLobo() {
	lobo.cargarOK=true;
	dibujarImagen();
}

function dibujarImagen() {
	if(fondo.cargarOK) {
		papel.drawImage(fondo.imagen,0,0);
	}

	if(cerdo.cargarOK) {
		for (var i = 0; i < cerdo.cantidad; i++) {
			papel.drawImage(cerdo.imagen,cerdo.posicionX[i],cerdo.posicionY[i]);
		}
	}

	if(pollo.cargarOK) {
		for (var i = 0; i < pollo.cantidad; i++) {
			papel.drawImage(pollo.imagen,pollo.posicionX[i],pollo.posicionY[i]);
		}
	}

	if(vaca.cargarOK) {
		for (var i = 0; i < vaca.cantidad; i++) {
			papel.drawImage(vaca.imagen,vaca.posicionX[i],vaca.posicionY[i]);
		}
	}

	if(lobo.cargarOK) {
		papel.drawImage(lobo.imagen,lobo.posicionX,lobo.posicionY);
	}
}

function getNumeroRandom(min,max) {
	return Math.floor(Math.random()*(max-min+1))+min;
}

function presionarTecla(event) {
	var codTecla=event.keyCode;
	var blDibujar=false;

	if(codTecla==tecla.up) {
		lobo.posicionY=lobo.posicionY-DesplazamientoPixel;

		blDibujar=true;
	}

	if(codTecla==tecla.down) {
		lobo.posicionY=lobo.posicionY+DesplazamientoPixel;

		blDibujar=true;
	}

	if(codTecla==tecla.left) {
		lobo.posicionX=lobo.posicionX-DesplazamientoPixel;

		blDibujar=true;
	}

	if(codTecla==tecla.right) {
		lobo.posicionX=lobo.posicionX+DesplazamientoPixel;

		blDibujar=true;	
	}

	if(blDibujar) {
		dibujarImagen();
	}
}

