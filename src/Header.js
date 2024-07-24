import React from 'react';
import { FaSearch } from "react-icons/fa";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import h from './Header.module.css'

function HeaderCom() {
  return (

    <header className={h.header}>

      <h1 className={h.emart}> E-Mart</h1>

      
        <div className={h.itemsDiv}>

          <div className={h.listItems} id={h.all}>All</div>
          <div className={h.listItems} id={h.sellers}>Best Sellers</div>
          <div className={h.listItems}>Mobiles</div>
          <div className={h.listItems}>Accessories</div>
          <div className={h.listItems}>Laptops</div>
          <div className={h.listItems} id={h.deals}>Top Deals</div>

        </div>

       
            
          <InputGroup  className={h.input}>
          <FormControl
            type="search"
            id="form1"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"/>
            
          <Button variant="primary" type="button" >
            <FaSearch />
          </Button>
        </InputGroup>

  

      <div className={h.logBtnDiv}>
        <div className={h.login}>Login</div>
        <div className={h.signup}>SignUp</div>
      </div>

    </header>
  )
}

export default HeaderCom