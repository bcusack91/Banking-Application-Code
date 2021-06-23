function Balance(){
  const ctx = React.useContext(UserContext); 
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance] = React.useState(ctx.users[0].balance );
  const [deposit, setDeposit] = React.useState('');
  return (
      <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        body={ 
                <>
                <h1>Balance</h1>
                Balance: {JSON.stringify(ctx.users[0].balance)} <br/>

                </>
        }
      />
    )
}


 
