const express=require('express');
const app=express();
const port=3000;
const bodyParser = require('body-parser');

app.get('/',(req,res)=>{
  res.send('parcial 1 Juan Alejandro Velez Giraldo');

});
app.listen(port, () => {
console.log(` //http://localhost:${port}`);
})




app.get('/utiles', (req, res) => {
  res.json([
    {
      Id: 1,
      NombreProducto: 'Cuaderno',
      ValorProducto: 5.99,
      FechaVencimiento: '2024-05-08T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Cuaderno de 100 hojas'
    },
    {
      Id: 2,
      NombreProducto: 'Lápiz',
      ValorProducto: 0.99,
      FechaVencimiento: '2026-05-08T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Lápiz HB'
    },
    {
      Id: 3,
      NombreProducto: 'Borrador',
      ValorProducto: 1.5,
      FechaVencimiento: '2025-08-15T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Borrador blanco'
    },
    {
      Id: 4,
      NombreProducto: 'Regla',
      ValorProducto: 2.25,
      FechaVencimiento: '2027-03-20T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Regla de plástico'
    },
    {
      Id: 5,
      NombreProducto: 'Libreta',
      ValorProducto: 3.75,
      FechaVencimiento: '2025-11-10T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Libreta de rayas'
    },
    {
      Id: 6,
      NombreProducto: 'Estuche',
      ValorProducto: 8.99,
      FechaVencimiento: '2026-07-25T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Estuche de tela'
    },
    {
      Id: 7,
      NombreProducto: 'Tijeras',
      ValorProducto: 4.5,
      FechaVencimiento: '2027-09-18T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Tijeras de acero'
    },
    {
      Id: 8,
      NombreProducto: 'Calculadora',
      ValorProducto: 12.75,
      FechaVencimiento: '2028-01-30T12:00:00',
      CategoriaProducto: 'Electrónica',
      DescripcionProducto: 'Calculadora científica'
    },
    {
      Id: 9,
      NombreProducto: 'Pegamento',
      ValorProducto: 2.99,
      FechaVencimiento: '2025-06-12T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Pegamento líquido'
    },
    {
      Id: 10,
      NombreProducto: 'Corrector',
      ValorProducto: 1.25,
      FechaVencimiento: '2026-08-22T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Corrector líquido'
    },
    {
      Id: 11,
      NombreProducto: 'Grapadora',
      ValorProducto: 6.99,
      FechaVencimiento: '2027-04-05T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Grapadora de escritorio'
    },
    {
      Id: 12,
      NombreProducto: 'Bolígrafo',
      ValorProducto: 1.75,
      FechaVencimiento: '2025-10-15T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Bolígrafo azul'
    },
    {
      Id: 13,
      NombreProducto: 'Carpeta',
      ValorProducto: 4.25,
      FechaVencimiento: '2026-12-28T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Carpeta de plástico'
    },
    {
      Id: 14,
      NombreProducto: 'Goma',
      ValorProducto: 0.75,
      FechaVencimiento: '2025-09-20T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Goma de borrar'
    },
    {
      Id: 15,
      NombreProducto: 'Cinta adhesiva',
      ValorProducto: 1.99,
      FechaVencimiento: '2027-07-14T12:00:00',
      CategoriaProducto: 'Papelería',
      DescripcionProducto: 'Cinta adhesiva transparente'
    }
  ])
})

app.get('/vehiculos', (req, res) => {
  res.json([
    {
      Id: 1,
      Marca: 'Toyota',
      Cilindraje: 2000,
      Tipo: 'Híbrido',
      Linea: 'Corolla',
      Color: 'Negro',
      Placa: 'ABC123',
      Valor: 25000
    },
    {
      Id: 2,
      Marca: 'Tesla',
      Cilindraje: 0,
      Tipo: 'Eléctrico',
      Linea: 'Model S',
      Color: 'Blanco',
      Placa: 'XYZ789',
      Valor: 70000
    },
    {
      Id: 3,
      Marca: 'Honda',
      Cilindraje: 1800,
      Tipo: 'Híbrido',
      Linea: 'Civic',
      Color: 'Azul',
      Placa: 'DEF456',
      Valor: 22000
    },
    {
      Id: 4,
      Marca: 'BMW',
      Cilindraje: 2500,
      Tipo: 'Combustión',
      Linea: 'Serie 3',
      Color: 'Gris',
      Placa: 'GHI789',
      Valor: 35000
    },
    {
      Id: 5,
      Marca: 'Ford',
      Cilindraje: 2200,
      Tipo: 'Híbrido',
      Linea: 'Escape',
      Color: 'Rojo',
      Placa: 'JKL012',
      Valor: 28000
    },
    {
      Id: 6,
      Marca: 'Chevrolet',
      Cilindraje: 1900,
      Tipo: 'Combustión',
      Linea: 'Spark',
      Color: 'Amarillo',
      Placa: 'MNO345',
      Valor: 15000
    },
    {
      Id: 7,
      Marca: 'Audi',
      Cilindraje: 2300,
      Tipo: 'Híbrido',
      Linea: 'A4',
      Color: 'Plateado',
      Placa: 'PQR678',
      Valor: 30000
    },
    {
      Id: 8,
      Marca: 'Volkswagen',
      Cilindraje: 2100,
      Tipo: 'Combustión',
      Linea: 'Golf',
      Color: 'Verde',
      Placa: 'STU901',
      Valor: 20000
    },
    {
      Id: 9,
      Marca: 'Mercedes-Benz',
      Cilindraje: 2400,
      Tipo: 'Eléctrico',
      Linea: 'EQC',
      Color: 'Dorado',
      Placa: 'VWX234',
      Valor: 60000
    },
    {
      Id: 10,
      Marca: 'Hyundai',
      Cilindraje: 2000,
      Tipo: 'Combustión',
      Linea: 'Accent',
      Color: 'Blanco',
      Placa: 'YZA567',
      Valor: 18000
    },
    {
      Id: 11,
      Marca: 'Kia',
      Cilindraje: 1700,
      Tipo: 'Híbrido',
      Linea: 'Rio',
      Color: 'Negro',
      Placa: 'BCD890',
      Valor: 21000
    },
    {
      Id: 12,
      Marca: 'Nissan',
      Cilindraje: 2100,
      Tipo: 'Híbrido',
      Linea: 'Sentra',
      Color: 'Rojo',
      Placa: 'EFG123',
      Valor: 23000
    },
    {
      Id: 13,
      Marca: 'Subaru',
      Cilindraje: 1900,
      Tipo: 'Combustión',
      Linea: 'Impreza',
      Color: 'Azul',
      Placa: 'HIJ456',
      Valor: 17000
    },
    {
      Id: 14,
      Marca: 'Mazda',
      Cilindraje: 2200,
      Tipo: 'Híbrido',
      Linea: 'Mazda3',
      Color: 'Gris',
      Placa: 'KLM789',
      Valor: 26000
    },
    {
      Id: 15,
      Marca: 'Jeep',
      Cilindraje: 2700,
      Tipo: 'Combustión',
      Linea: 'Wrangler',
      Color: 'Negro',
      Placa: 'NOP012',
      Valor: 32000
    }
  ])
})
// Ruta GET para listar los útiles de una categoría específica
const utiles=[
  {
    Id: 1,
    NombreProducto: 'Cuaderno',
    ValorProducto: 5.99,
    FechaVencimiento: '2024-05-08T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Cuaderno de 100 hojas'
  },
  {
    Id: 2,
    NombreProducto: 'Lápiz',
    ValorProducto: 0.99,
    FechaVencimiento: '2026-05-08T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Lápiz HB'
  },
  {
    Id: 3,
    NombreProducto: 'Borrador',
    ValorProducto: 1.5,
    FechaVencimiento: '2025-08-15T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Borrador blanco'
  },
  {
    Id: 4,
    NombreProducto: 'Regla',
    ValorProducto: 2.25,
    FechaVencimiento: '2027-03-20T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Regla de plástico'
  },
  {
    Id: 5,
    NombreProducto: 'Libreta',
    ValorProducto: 3.75,
    FechaVencimiento: '2025-11-10T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Libreta de rayas'
  },
  {
    Id: 6,
    NombreProducto: 'Estuche',
    ValorProducto: 8.99,
    FechaVencimiento: '2026-07-25T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Estuche de tela'
  },
  {
    Id: 7,
    NombreProducto: 'Tijeras',
    ValorProducto: 4.5,
    FechaVencimiento: '2027-09-18T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Tijeras de acero'
  },
  {
    Id: 8,
    NombreProducto: 'Calculadora',
    ValorProducto: 12.75,
    FechaVencimiento: '2028-01-30T12:00:00',
    CategoriaProducto: 'Electrónica',
    DescripcionProducto: 'Calculadora científica'
  },
  {
    Id: 9,
    NombreProducto: 'Pegamento',
    ValorProducto: 2.99,
    FechaVencimiento: '2025-06-12T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Pegamento líquido'
  },
  {
    Id: 10,
    NombreProducto: 'Corrector',
    ValorProducto: 1.25,
    FechaVencimiento: '2026-08-22T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Corrector líquido'
  },
  {
    Id: 11,
    NombreProducto: 'Grapadora',
    ValorProducto: 6.99,
    FechaVencimiento: '2027-04-05T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Grapadora de escritorio'
  },
  {
    Id: 12,
    NombreProducto: 'Bolígrafo',
    ValorProducto: 1.75,
    FechaVencimiento: '2025-10-15T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Bolígrafo azul'
  },
  {
    Id: 13,
    NombreProducto: 'Carpeta',
    ValorProducto: 4.25,
    FechaVencimiento: '2026-12-28T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Carpeta de plástico'
  },
  {
    Id: 14,
    NombreProducto: 'Goma',
    ValorProducto: 0.75,
    FechaVencimiento: '2025-09-20T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Goma de borrar'
  },
  {
    Id: 15,
    NombreProducto: 'Cinta adhesiva',
    ValorProducto: 1.99,
    FechaVencimiento: '2027-07-14T12:00:00',
    CategoriaProducto: 'Papelería',
    DescripcionProducto: 'Cinta adhesiva transparente'
  }
];
const vehiculos=[
  {
    Id: 1,
    Marca: 'Toyota',
    Cilindraje: 2000,
    Tipo: 'Híbrido',
    Linea: 'Corolla',
    Color: 'Negro',
    Placa: 'ABC123',
    Valor: 25000
  },
  {
    Id: 2,
    Marca: 'Tesla',
    Cilindraje: 0,
    Tipo: 'Eléctrico',
    Linea: 'Model S',
    Color: 'Blanco',
    Placa: 'XYZ789',
    Valor: 70000
  },
  {
    Id: 3,
    Marca: 'Honda',
    Cilindraje: 1800,
    Tipo: 'Híbrido',
    Linea: 'Civic',
    Color: 'Azul',
    Placa: 'DEF456',
    Valor: 22000
  },
  {
    Id: 4,
    Marca: 'BMW',
    Cilindraje: 2500,
    Tipo: 'Combustión',
    Linea: 'Serie 3',
    Color: 'Gris',
    Placa: 'GHI789',
    Valor: 35000
  },
  {
    Id: 5,
    Marca: 'Ford',
    Cilindraje: 2200,
    Tipo: 'Híbrido',
    Linea: 'Escape',
    Color: 'Rojo',
    Placa: 'JKL012',
    Valor: 28000
  },
  {
    Id: 6,
    Marca: 'Chevrolet',
    Cilindraje: 1900,
    Tipo: 'Combustión',
    Linea: 'Spark',
    Color: 'Amarillo',
    Placa: 'MNO345',
    Valor: 15000
  },
  {
    Id: 7,
    Marca: 'Audi',
    Cilindraje: 2300,
    Tipo: 'Híbrido',
    Linea: 'A4',
    Color: 'Plateado',
    Placa: 'PQR678',
    Valor: 30000
  },
  {
    Id: 8,
    Marca: 'Volkswagen',
    Cilindraje: 2100,
    Tipo: 'Combustión',
    Linea: 'Golf',
    Color: 'Verde',
    Placa: 'STU901',
    Valor: 20000
  },
  {
    Id: 9,
    Marca: 'Mercedes-Benz',
    Cilindraje: 2400,
    Tipo: 'Eléctrico',
    Linea: 'EQC',
    Color: 'Dorado',
    Placa: 'VWX234',
    Valor: 60000
  },
  {
    Id: 10,
    Marca: 'Hyundai',
    Cilindraje: 2000,
    Tipo: 'Combustión',
    Linea: 'Accent',
    Color: 'Blanco',
    Placa: 'YZA567',
    Valor: 18000
  },
  {
    Id: 11,
    Marca: 'Kia',
    Cilindraje: 1700,
    Tipo: 'Híbrido',
    Linea: 'Rio',
    Color: 'Negro',
    Placa: 'BCD890',
    Valor: 21000
  },
  {
    Id: 12,
    Marca: 'Nissan',
    Cilindraje: 2100,
    Tipo: 'Híbrido',
    Linea: 'Sentra',
    Color: 'Rojo',
    Placa: 'EFG123',
    Valor: 23000
  },
  {
    Id: 13,
    Marca: 'Subaru',
    Cilindraje: 1900,
    Tipo: 'Combustión',
    Linea: 'Impreza',
    Color: 'Azul',
    Placa: 'HIJ456',
    Valor: 17000
  },
  {
    Id: 14,
    Marca: 'Mazda',
    Cilindraje: 2200,
    Tipo: 'Híbrido',
    Linea: 'Mazda3',
    Color: 'Gris',
    Placa: 'KLM789',
    Valor: 26000
  },
  {
    Id: 15,
    Marca: 'Jeep',
    Cilindraje: 2700,
    Tipo: 'Combustión',
    Linea: 'Wrangler',
    Color: 'Negro',
    Placa: 'NOP012',
    Valor: 32000
  }
];
// Endpoint para filtrar útiles por CategoriaProducto
app.get('/utiles/:categoria', (req, res) => {
  const categoria = req.params.categoria;
  const utilesFiltrados = utiles.filter(ut => ut.CategoriaProducto.toLowerCase() === categoria.toLowerCase());
  res.json(utilesFiltrados);
});
app.get('/vehiculosMayorA10k', (req, res) => {
  const vehiculosFiltrados = vehiculos.filter(vehiculo => vehiculo.Valor > 10000);
  res.json(vehiculosFiltrados);
});
app.get('/utiles-Calculoiva', (req, res) => {
  const utilesConIVA = utiles.map(ut => {
      const iva = ut.ValorProducto * 0.19;
      const totalConIVA = ut.ValorProducto + iva;
      return {
          ...ut,
          IVA: iva,
          TotalConIVA: totalConIVA
      };
  });
  res.json(utilesConIVA);
});
// Endpoint para listar los vehículos de una marca específica
app.get('/vehiculos/:marca', (req, res) => {
  const marca = req.params.marca;
  const vehiculosMarca = vehiculos.filter(vehiculo => vehiculo.Marca.toLowerCase() === marca.toLowerCase());
  if (vehiculosMarca.length === 0) {
      return res.status(404).json({ error: 'No se encontraron vehículos para la marca especificada.' });
  }
  res.json(vehiculosMarca);
});
function calcularImpuesto(valor, tipoCombustible) {
  if (tipoCombustible === 'Gasolina') {
      if (valor <= 50000000) {
          return valor * 0.01;
      } else if (valor <= 100000000) {
          return valor * 0.015;
      } else if (valor <= 150000000) {
          return valor * 0.025;
      } else {
          return valor * 0.035;
      }
  } else if (tipoCombustible === 'Eléctrico') {
      return valor * 0.01;
  } else {
      return 0; // Si el tipo de combustible no es válido, se devuelve un impuesto de 0
  }
}

// Endpoint para listar todos los vehículos con el impuesto vehicular calculado
app.get('/impuesto-vehicular', (req, res) => {
  const vehiculosConImpuesto = vehiculos.map(vehiculo => {
      const impuesto = calcularImpuesto(vehiculo.Valor, vehiculo.TipoCombustible);
      return {
          ...vehiculo,
          ImpuestoVehicular: impuesto
      };
  });
  res.json(vehiculosConImpuesto);
});


app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Parcial 1 rutas');
})

// 5 ENDPOINTS GET PARA UTILES
app.get('/utiles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const utile = utiles.find(utile => utile.Id === id);
  if (!utile) {
      return res.status(404).json({ error: 'Utíl no encontrado' });
  }
  res.json(utile);
});

app.get('/utiles/nombre/:nombre', (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  const utilesPorNombre = utiles.filter(utile => utile.NombreProducto.toLowerCase().includes(nombre));
  if (utilesPorNombre.length === 0) {
      return res.status(404).json({ error: 'No se encontraron útiles con ese nombre' });
  }
  res.json(utilesPorNombre);
});

app.get('/utiles/vencimiento/:fecha', (req, res) => {
  const fecha = new Date(req.params.fecha);
  const utilesVencimientoPosterior = utiles.filter(utile => new Date(utile.FechaVencimiento) > fecha);
  if (utilesVencimientoPosterior.length === 0) {
      return res.status(404).json({ error: 'No se encontraron útiles con fecha de vencimiento posterior a la fecha especificada' });
  }
  res.json(utilesVencimientoPosterior);
});

app.get('/utiles/valor/:min/:max', (req, res) => {
  const min = parseFloat(req.params.min);
  const max = parseFloat(req.params.max);
  const utilesPorValor = utiles.filter(utile => utile.ValorProducto >= min && utile.ValorProducto <= max);
  if (utilesPorValor.length === 0) {
      return res.status(404).json({ error: 'No se encontraron útiles en ese rango de valor' });
  }
  res.json(utilesPorValor);
});

app.get('/vehiculos/color/:color', (req, res) => {
  const color = req.params.color.toLowerCase();
  const vehiculosPorColor = vehiculos.filter(vehiculo => vehiculo.Color.toLowerCase() === color);
  if (vehiculosPorColor.length === 0) {
      return res.status(404).json({ error: 'No se encontraron vehículos con ese color' });
  }
  res.json(vehiculosPorColor);
});

//  5 endpoints para el arreglo de vehiculos

app.get('/vehiculos/combustible/:tipo', (req, res) => {
  const tipo = req.params.tipo.toLowerCase();
  const vehiculosPorTipo = vehiculos.filter(vehiculo => vehiculo.TipoCombustible.toLowerCase() === tipo);
  if (vehiculosPorTipo.length === 0) {
      return res.status(404).json({ error: 'No se encontraron vehículos con ese tipo de combustible' });
  }
  res.json(vehiculosPorTipo);
});

app.get('/vehiculos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vehiculo = vehiculos.find(vehiculo => vehiculo.Id === id);
  if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
  }
  res.json(vehiculo);
});

app.get('/vehiculos/valor/:min/:max', (req, res) => {
  const min = parseFloat(req.params.min);
  const max = parseFloat(req.params.max);
  const vehiculosPorValor = vehiculos.filter(vehiculo => vehiculo.Valor >= min && vehiculo.Valor <= max);
  if (vehiculosPorValor.length === 0) {
      return res.status(404).json({ error: 'No se encontraron vehículos en ese rango de valor' });
  }
  res.json(vehiculosPorValor);
});

app.get('/vehiculos/color/:color/combustible/:combustible', (req, res) => {
  const color = req.params.color.toLowerCase();
  const combustible = req.params.combustible.toLowerCase();
  const vehiculosPorColorYCombustible = vehiculos.filter(vehiculo => vehiculo.Color.toLowerCase() === color && vehiculo.TipoCombustible.toLowerCase() === combustible);
  if (vehiculosPorColorYCombustible.length === 0) {
      return res.status(404).json({ error: 'No se encontraron vehículos con ese color y tipo de combustible' });
  }
  res.json(vehiculosPorColorYCombustible);
});







