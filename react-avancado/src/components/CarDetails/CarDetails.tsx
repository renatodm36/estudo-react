import React from 'react';

interface CarDetailsProps {
  id : number;
  brand?: string;
  km?: string;
  color?: string;
  newCar?: boolean;
}

const CarDetails: React.FC<CarDetailsProps> = ({ id
                                                ,brand
                                                ,km
                                                ,color
                                                ,newCar=false}) => {

  return (
    <>
      <div>
        <h2>Detalhes do carro</h2>
        <ul>
          <li>ID: {id}</li>
          <li>Marca: {brand}</li>
          <li>KM: {km}</li>
          <li>Cor: {color}</li>
          {newCar && <p>Este carro é novo</p>}          
        </ul>
      </div>
    </>
  );
};

export default CarDetails;
