/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { petById } from "store/slices/pets";

// calculate age from year of birth and return it in months
const calculateAgeInMonths = (birthYear: any) => {
  const currentYear = new Date().getFullYear();
  const ageInMonths = (currentYear - birthYear) * 12;
  return ageInMonths;
};

const Details: React.FC<{}> = () => {
  const { id } = useParams();
  const pet = useSelector((store: { pets: any }) => store.pets);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(petById(id));
  }, []);

  return (
    <div>
      <div className="lg:flex my-7 ">
        <h2 className="font-bold text-2xl md:hidden p-4">{pet.pets[0].name}</h2>
        <img
          src={pet.pets[0].photo}
          alt={pet.pets[0].name}
          className="w-full md:rounded-2xl h-60 md:h-96 lg:w-1/2 object-cover"
        />
        <div className="lg:px-8 py-8">
          <h2 className="font-bold text-2xl hidden md:block">
            {pet.pets[0].name}
          </h2>
          <div className="grid grid-cols-2 lg:gap-x-20 gap-y-8 my-4 px-4 md:px-0">
            <div>
              <h2 className="font-semibold text-xl">Type</h2>
              <span>{pet.pets[0].species}</span>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Date added</h2>
              <span>{pet.pets[0].dateAdded}</span>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Age</h2>
              <span>
                {calculateAgeInMonths(pet.pets[0].birthYear)}
                {' '}
                months
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-xl">Category</h2>
              <span>small pet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
