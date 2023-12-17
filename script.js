const accounts = [
    { name: 'Erick', balance: 500, password: '0123' },
    { name: 'Samuel', balance: 200, password: '1234' },
    { name: 'Jesus', balance: 750, password: '2345' },
  ];
  
  let selectedAccount = null;
  
  function selectAccount(accountIndex) {
    selectedAccount = accounts[accountIndex - 1];
    document.getElementById('account-info').style.display = 'block';
    document.getElementById('operations').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
  }
  
  function verifyPassword() {
    const passwordInput = document.getElementById('password').value;
    if (selectedAccount && passwordInput === selectedAccount.password) {
      document.getElementById('account-info').style.display = 'none';
      document.getElementById('operations').style.display = 'block';
    } else {
      document.getElementById('password-error').style.display = 'block';
    }
  }
  function returnToHome() {
    document.getElementById('account-info').classList.add('hidden');
    document.getElementById('operations').classList.add('hidden');
    document.querySelector('.return-button').classList.add('hidden');
    document.querySelector('.account-list').classList.remove('hidden');
    document.getElementById('password').value = '';
    document.getElementById('password-error').classList.add('hidden');
    document.getElementById('operation-result').textContent = '';
  }
  
  function checkBalance() {
    document.getElementById('operation-result').textContent = `Saldo actual: $${selectedAccount.balance}`;
  }
  
  function depositAmount() {
    const deposit = parseFloat(prompt('Ingrese el monto a ingresar:'));
    if (!isNaN(deposit) && deposit > 0 && (selectedAccount.balance + deposit) <= 990) {
      selectedAccount.balance += deposit;
      document.getElementById('operation-result').textContent = `Monto ingresado: $${deposit}. Nuevo saldo: $${selectedAccount.balance}`;
    } else {
      document.getElementById('operation-result').textContent = 'Monto inválido o excede el límite de la cuenta.';
    }
  }
  
  function withdrawAmount() {
    const withdraw = parseFloat(prompt('Ingrese el monto a retirar:'));
    if (!isNaN(withdraw) && withdraw > 0 && (selectedAccount.balance - withdraw) >= 10) {
      selectedAccount.balance -= withdraw;
      document.getElementById('operation-result').textContent = `Monto retirado: $${withdraw}. Nuevo saldo: $${selectedAccount.balance}`;
    } else {
      document.getElementById('operation-result').textContent = 'Monto inválido o excede el límite de la cuenta.';
    }
  }

  
  