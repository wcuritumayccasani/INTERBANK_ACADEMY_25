const fs = require('fs');
const csv = require('csv-parser');

const dataArray = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    dataArray.push(row);
  })
  .on('end', () => {
    generarReporte(dataArray);
  });

function generarReporte(dataArray) {
  let balance = 0;
  let transaccionMax = { id: '', monto: 0 };
  let contadorCredito = 0;
  let contadorDebito = 0;

  dataArray.forEach((transaccion) => {
    const monto = parseFloat(transaccion.monto);
    
    if (transaccion.tipo === 'Crédito') {
      balance += monto;
      contadorCredito++;
    } else if (transaccion.tipo === 'Débito') {
      balance -= monto;
      contadorDebito++;
    }

    if (monto > transaccionMax.monto) {
      transaccionMax = { id: transaccion.id, monto: monto };
    }
  });

  console.log('Reporte de Transacciones');
  console.log('---------------------------------------------');
  console.log(`Balance Final: ${balance.toFixed(2)}`);
  console.log(`Transacción de Mayor Monto: ID ${transaccionMax.id} - ${transaccionMax.monto.toFixed(2)}`);
  console.log(`Conteo de Transacciones: Crédito: ${contadorCredito} Débito: ${contadorDebito}`);
}
