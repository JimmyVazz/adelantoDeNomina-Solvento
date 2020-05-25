create database solventoADN;
use solventoADN;

CREATE TABLE DiasFestivos (
  IDFestivo int AUTO_INCREMENT,
  DiaNoLaboral int,
DiaSabado int,
  DiaDomingo int,
  PRIMARY KEY (IDFestivo)
);


CREATE TABLE Empresa (
  idEmpresa int AUTO_INCREMENT,
  nombre varchar (30),
  fechaAlta DATETIME,
  activa bit,
  PRIMARY KEY (idEmpresa)
);


CREATE TABLE RazonSocial (
  RFCRazonSocial varchar (30),
  idEmpresa int,
  nombre varchar (30),
  domicilio varchar (40),
  fechaAlta dateTime,
  PRIMARY KEY(RFCRazonSocial),
  FOREIGN KEY(idEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE ParamPrestamo (
  idParamPrestamo int AUTO_INCREMENT,
  RFCRazonSocial varchar (20),
  montoMaxTotal float,
  porcentajeMaxTotal float,
  montoMaxEmpleado float,
  porcentajeMaxEmpleado varchar (10),
  PRIMARY KEY(idParamPrestamo),
  FOREIGN KEY(RFCRazonSocial) REFERENCES RazonSocial(RFCRazonSocial)
);

CREATE TABLE Empleado (
  idEmpleado bigint AUTO_INCREMENT,
  RFCEmpleado varchar (20),
  IMSS numeric,
  nombre varchar (20),
  apellidoPaterno varchar (20),
  apellidoMaterno varchar (20),
  CURP varchar (20),
  domicilio varchar (40),
  telFijo numeric,
  telCelular numeric,
  activo bit,
  PRIMARY KEY (idEmpleado)
);

CREATE TABLE Banco (
  idBanco smallint AUTO_INCREMENT,
  nombre varchar (20),
  activo bit,
  primary KEY(idBanco)
);


CREATE TABLE DatosPago (
  idEmpleado bigint,
  CLABE varchar(20),
  cuenta varchar(20),
  activo bit,
  idBanco smallint,
  FOREIGN KEY(idEmpleado) REFERENCES Empleado(idEmpleado),
  FOREIGN KEY(idBanco) REFERENCES Banco(idBanco) 
);

CREATE TABLE PeriodoPago (
  idPeriodoPago int AUTO_INCREMENT,
  RFCRazonSocial varchar (20),
  diaPago smallint,
  descripcion varchar (20),
  diaEnvioIncidencias smallint,
  activo bit,
  diaPago2 smallint,
  PRIMARY KEY(idPeriodoPago),
  FOREIGN KEY(RFCRazonSocial) REFERENCES RazonSocial(RFCRazonSocial)
);

CREATE TABLE Nomina (
  idNomina bigint AUTO_INCREMENT,
  RFCRazonSocial varchar (20),
  idEmpleado bigint,
  numNominaEmpresa varchar (20),
  salarioDiario float,
  prestamoActivo bit,
  activa bit,
  fechaAlta dateTime,
  semanasCotizadas int,
  fechaConsultasemanas dateTime,
  idPeriodoPago int,
  FactorDescuento float,
  PRIMARY KEY(idNomina),
  FOREIGN KEY(RFCRazonSocial) REFERENCES RazonSocial(RFCRazonSocial),
  FOREIGN KEY(idEmpleado) REFERENCES Empleado(idEmpleado),
  FOREIGN KEY(idPeriodoPago) REFERENCES PeriodoPago(idPeriodoPago)
);


CREATE TABLE Comisiones (
  idComision int AUTO_INCREMENT,
  RFCRazonSocial varchar (20),
  comisionMonto int,
  comisionPorcentaje float,
  activa bit,
  pagaEmpresa bit,
  PRIMARY KEY(idComision),
   FOREIGN KEY(RFCRazonSocial) REFERENCES RazonSocial(RFCRazonSocial)

);

CREATE TABLE Prestamo (
  idPrestamo bigint AUTO_INCREMENT,
  idNomina bigint,
  fechaSolicitud dateTime,
  monto float,
  aprobado bit,
  fechaAprobRechazo dateTime,
  PRIMARY KEY(idPrestamo),
   FOREIGN KEY(idNomina) REFERENCES Nomina(idNomina)
);

CREATE TABLE MediosPago (
  idMedioPago int AUTO_INCREMENT,
  nombre varchar (20),
  activo bit,
  comision float,
  PRIMARY key(idMedioPago)
);


CREATE TABLE Pago (
  idPago bigint AUTO_INCREMENT,
  idPrestamo bigint,
  monto float,
  idMedioPago int,
  folio bigint,
  fhPago dateTime,
  PRIMARY KEY(idPago),
  FOREIGN key(idPrestamo) REFERENCES Prestamo(idPrestamo),
  FOREIGN key(idMedioPago) REFERENCES MediosPago(idMedioPago)
);

CREATE TABLE FacturaEmpleado (
  idFactura bigint AUTO_INCREMENT,
  idPrestamo bigint,
  fechaFactura dateTime,
  cadenaSAT VARCHAR (50),
  xmlCFDI varchar(50),
  PRIMARY KEY(idFactura),
  FOREIGN key(idPrestamo) REFERENCES Prestamo(idPrestamo)
);



CREATE TABLE FacturaEmpresa (
  idFactura bigint AUTO_INCREMENT,
  fechaEmision dateTime,
  cadenaSAT varchar (50),
  xmlCFDI varchar(50),
  pagada bit,
  PRIMARY KEY(idFactura)
);

CREATE TABLE CobroEmpresa (
  idCobro bigint AUTO_INCREMENT,
  idPrestamo bigint,
  idFactura bigint,
  fechaCobro dateTime,
  PRIMARY KEY(idCobro),
  FOREIGN key(idPrestamo) REFERENCES Prestamo(idPrestamo),
  FOREIGN key(idFactura) REFERENCES FacturaEmpresa(idFactura)
);


CREATE TABLE PagoEmpresa (
  idPago bigint AUTO_INCREMENT,
  idFactura bigint,
  monto float,
  fechaPago dateTime,
  PRIMARY KEY(idPago),
   FOREIGN key(idFactura) REFERENCES FacturaEmpresa(idFactura)
);
















