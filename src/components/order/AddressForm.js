import React, { useEffect, useState } from 'react';
import { useDeliveryAddressStore } from '../../store/AddressStore';
import bangladeshDistricts from '../../store/District';
import '../../style/AddressFormStyle.scss';


function AddressForm({ addressFromMap }) {
  const { addDeliveryAddress } = useDeliveryAddressStore();
  const [formData, setFormData] = useState({
    city: '',
    area: '',
    floorNo: '',
    flatNo: '',
    name: '',
    mobileNumber: '',
    tags: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({
      ...formData,
      area: addressFromMap,
    })
  }, [addressFromMap]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedTags = checked
      ? [...formData.tags, name]
      : formData.tags.filter((tag) => tag !== name);
    setFormData({
      ...formData,
      tags: updatedTags,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.city) {
      validationErrors.city = 'City is required';
    }
    if (!formData.area) {
      validationErrors.area = 'Area is required';
    }
    if (!formData.floorNo) {
      validationErrors.floorNo = 'Floor No is required';
    }
    if (!formData.flatNo) {
      validationErrors.flatNo = 'Flat No is required';
    }
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.mobileNumber) {
      validationErrors.mobileNumber = 'Mobile Number is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submitting
      console.log('Submitted Data:', formData);
      addDeliveryAddress(formData);
      // You can proceed with saving data or any other action here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <h2>Add New Address</h2>
      <form onSubmit={handleSubmit}>
        <div className='city-and-area'>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <select id="city" name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              {
                bangladeshDistricts.map((district) => {
                  return <option value={district.name}>{district.name}</option>
                })
              }
            </select>
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="area">Area:</label>
            <textarea id="area" name="area" rows="4" value={formData.area} onChange={handleChange}></textarea>
            {errors.area && <span className="error">{errors.area}</span>}
          </div>
        </div>
        <div className='floor-and-flat'>
          <div className="form-group">
            <label htmlFor="floorNo">Floor No:</label>
            <input type="text" id="floorNo" name="floorNo" value={formData.floorNo} onChange={handleChange} />
            {errors.floorNo && <span className="error">{errors.floorNo}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="flatNo">Flat No:</label>
            <input type="text" id="flatNo" name="flatNo" value={formData.flatNo} onChange={handleChange} />
            {errors.flatNo && <span className="error">{errors.flatNo}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
        </div>
        <div className="form-group">
          <h4>Add a label:</h4>
          <div className="tags">
            <input type="checkbox" id="home" name="home" value="home" checked={formData.tags.includes('home')} onChange={handleCheckboxChange} />
            <label htmlFor="home">Home</label>
            <input type="checkbox" id="office" name="office" value="office" checked={formData.tags.includes('office')} onChange={handleCheckboxChange} />
            <label htmlFor="office">Office</label>
            <input type="checkbox" id="heart" name="heart" value="heart" checked={formData.tags.includes('heart')} onChange={handleCheckboxChange} />
            <label htmlFor="heart">Heart</label>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddressForm;
