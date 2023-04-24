function hitung() {
  const input1 = parseInt(document.getElementById("data1").value);
  const input2 = parseInt(document.getElementById("data2").value);
  const input3 = parseInt(document.getElementById("data3").value);
  const period = parseInt(document.getElementById("period").value);
  const method = document.getElementById("method").value;

  let data = [input1, input2, input3];
  let hasil = 0;

  const sma = (data) => {
    let sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
  };

  const wma = (data) => {
    let sum = 0;
    let totalBobot = 0;
    for (let i = 0; i < data.length; i++) {
      let bobot = i + 1;
      totalBobot += bobot;
      sum += data[i] * bobot;
    }
    return sum / totalBobot;
  };

  const xma = (data, period) => {
    let newData = data.slice(0, period);
    let prevxma = 0;
    let newxma;
    for (let i = period; i < data.length; i++) {
      if (prevxma == 0) {
        prevxma = sma(newData);
      }
      newxma = (2 / (period + 1)) * (data[i] - prevxma) + prevxma;
      prevxma = newxma;
    }
    return newxma;
  };

  switch (method) {
    case "SMA":
      hasil = sma(data);
      break;
    case "WMA":
      hasil = wma(data);
      break;
    case "XMA":
      hasil = xma(data, period);
      break;
  }
  document.getElementById("hasil").innerHTML =
    "Hasil dengan metode " + method + " adalah " + hasil.toFixed(2);
}
