import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function OrderForm() {
  const [size, setSize] = useState('');
  const [sauce, setSauce] = useState('');
  const [toppings, setToppings] = useState([]);
  const [substitute, setSubstitute] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [isLoading, setIsLoading] = useState(false)



  const navigate = useNavigate();
  let axiosCancelToken;

  // const handleNameChange = (event) => {
  //   setName(event.target.value)
  // }

  const isTextValid = (text, minLength) => {
    return text.length >= minLength;
  }
  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    setNameError(!isTextValid(value, 2) ? 'name must be at least 2 characters' : '');

  }

  useEffect(() => {
    axiosCancelToken = axios.CancelToken.source();

    return () => {
      // Cleanup function to cancel any ongoing axios requests
      axiosCancelToken.cancel();
    };
  }, []);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleSauceChange = (event) => {
    setSauce(event.target.value);
  };

  const handleToppingsChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setToppings([...toppings, name]);
    } else {
      setToppings(toppings.filter((topping) => topping !== name));
    }
  };

  const handleSubstituteChange = (event) => {
    setSubstitute(event.target.checked);
  };

  const handleSpecialInstructionsChange = (event) => {
    setSpecialInstructions(event.target.value);
  };

  const handleQuantityIncrease = () => {
    if (quantity < 999) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.length < 2) {
      setNameError('Name must be at least 2 characters');
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        name: name,
        size: size,
        topping1: toppings.includes('pepperoni'),
        topping2: toppings.includes('sausage'),
        special: specialInstructions,
      };

      const response = await axios.post('https://reqres.in/api/orders', payload);

      console.log(response.data);






      setSize('');
      setSauce('');
      setToppings([]);
      setSubstitute(false);
      setSpecialInstructions('');
      setName('')

      navigate('/Conformation');
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled:', error.message);
      } else {
        console.log(error);
      
      }
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          id='name-input'
          value={name}
          placeholder='Eneter Your Name'
          onChange={handleNameChange}
        />
        {nameError && <span className="error">{nameError}</span>}
      </label>

      <div>
        <h1>Build Your Own Pizza</h1>
        <img href='' />
      </div>
      <div id="formInput-group">
        <div className="sideDiv">
          <div>
            <h2>Choice of Side</h2>
            <p>Required</p>
          </div>
          <label>
            <select id='size-dropdown' value={size} onChange={handleSizeChange}>
              <option value=''>- Select an option -</option>
              <option value='small'>- Small -</option>
              <option value='medium'>- Medium -</option>
              <option value='large'>- Large -</option>
            </select>
          </label>
        </div>
        <div className="sauceDiv">
          <div>
            <h2>Choice of Sauce</h2>
            <p>Required</p>
          </div>
          <label>Original Sauce
            <input
              type="radio"
              name="sauce"
              value='original'
              checked={sauce === 'original'}
              onChange={handleSauceChange}
            />
          </label>
          <label>Garlic Ranch
            <input
              type="radio"
              name="sauce"
              value='garlic'
              checked={sauce === 'garlic'}
              onChange={handleSauceChange}
            />
          </label>
          <label>BBQ Sauce
            <input
              type="radio"
              name="sauce"
              value='bbq'
              checked={sauce === 'bbq'}
              onChange={handleSauceChange}
            />
          </label>
          <label>Spinach Alfredo
            <input
              type="radio"
              name="sauce"
              value='sp'
              checked={sauce === 'sp'}
              onChange={handleSauceChange}
            />
          </label>
        </div>
        <div className="toppingsDiv">
          <div>
            <h3>Add Topping</h3>
            <p>Choose up to 10.</p>
          </div>
          <label>Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={toppings.includes('pepperoni')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={toppings.includes('sausage')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Bacon
            <input
              type="checkbox"
              name="bacon"
              checked={toppings.includes('bacon')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Spicy Italian Sausage
            <input
              type="checkbox"
              name="sIs"
              checked={toppings.includes('sIs')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Grilled Chicken
            <input
              type="checkbox"
              name="grilledC"
              checked={toppings.includes('grilledC')}
              onChange={handleToppingsChange}
            />
          </label>
          {/* Add the remaining toppings checkboxes */}
          <label>Onions
            <input
              type="checkbox"
              name="onions"
              checked={toppings.includes('onions')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Green Peppers
            <input
              type="checkbox"
              name="greenPep"
              checked={toppings.includes('greenPep')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Diced Tomatoes
            <input
              type="checkbox"
              name="dicedT"
              checked={toppings.includes('dicedT')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Black Olives
            <input
              type="checkbox"
              name="blackOlives"
              checked={toppings.includes('blackOlives')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Roasted Garlic
            <input
              type="checkbox"
              name="roastedGar"
              checked={toppings.includes('roastedGar')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Artichoke Hearts
            <input
              type="checkbox"
              name="hearts"
              checked={toppings.includes('hearts')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Three Cheese
            <input
              type="checkbox"
              name="threecheese"
              checked={toppings.includes('threecheese')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={toppings.includes('pineapple')}
              onChange={handleToppingsChange}
            />
          </label>
          <label>Extra Cheese
            <input
              type="checkbox"
              name="extraCheese"
              checked={toppings.includes('extraCheese')}
              onChange={handleToppingsChange}
            />
          </label>
        </div>
        <div className="substituteDiv">
          <div>
            <h3>Choice of Substitute</h3>
            <p>Choose up to 1.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={substitute}
              onChange={handleSubstituteChange}
            />
            <span className="slider">Gluten Free Crust (+111)</span>
          </label>
          {/* add styling to make appear as a toggle switch */}
        </div>
        <div className="special">
          <div><h3>Special Instructions</h3></div>
          <label>
            <input
              id="special-text"
              type="text"
              placeholder='Any Thing Else to add?'
              name='special-text'
              value={specialInstructions}
              onChange={handleSpecialInstructionsChange}
            />
          </label>
        </div>
      </div>
      <div>
        <h3>Quantity: {quantity}</h3>
        <button type="button" onClick={handleQuantityDecrease}>
          Decrease
        </button>
        <button type="button" onClick={handleQuantityIncrease}>
          Increase
        </button>
      </div>
      <button type="submit" id='order-button'>Add to Order</button>
    </form>
  );
}

export default OrderForm;