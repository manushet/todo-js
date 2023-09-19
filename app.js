(function() {
  const users = [
    {
      id: 1,
      name: "user1",
      email: "user1@mail.com",
      balance: 1000,
    },
    {
      id: 2,
      name: "user2",
      email: "user2@mail.com",
      balance: 2000,
    },
    {
      id: 3,
      name: "user3",
      email: "user3@mail.com",
      balance: 3000,
    },
    {
      id: 4,
      name: "user4",
      email: "user4@mail.com",
      balance: 4000,
    },
  ];

  renderUsersTable(users);

  function renderUsersTable(users) {
      
      const table_container = document.body.querySelector('.table-container');
      const table = document.createElement('table');
      table.classList.add('table');
      const table_head = document.createElement('thead');
      const table_head_row = document.createElement('tr');
      const table_body = document.createElement('tbody');

      const fields = {
        id: "#", 
        name: "Name", 
        email: "Email", 
        balance: "Balance", 
      };        

      table_container
        .insertAdjacentElement("afterBegin", table)
        .insertAdjacentElement("afterBegin", table_head)
        .insertAdjacentElement("afterBegin", table_head_row);
       
      Object.values(fields).forEach(val => {
        const th = document.createElement('th');
        th.textContent = val;
        table_head_row.insertAdjacentElement("beforeEnd", th);  
      });

      table_head.insertAdjacentElement("afterEnd", table_body);

      users.map(user => {
        const tbody_row = document.createElement('tr');
        table_body.insertAdjacentElement("beforeEnd", tbody_row);
        Object.values(user).forEach(val => {
          const td = document.createElement('td');
          td.textContent = val;
          tbody_row.insertAdjacentElement("beforeEnd", td);
        }); 
      });

      

  }

})();
