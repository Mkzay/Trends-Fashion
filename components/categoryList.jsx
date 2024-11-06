"use client";

import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://asos2.p.rapidapi.com/categories/list?store=US&lang=en-US";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        console.log(data);  // Check the structure of the data in the console
        setCategories(data.categories || []);  // Safely handle undefined data
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-orange-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }

  if (!categories || categories.length === 0) {
    return <p>No categories found.</p>;  // Add fallback when no categories are present
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-4">Categories</h1>
      <ul className="space-y-2">
        {Array.isArray(categories) && categories.map((category) => (
          <li key={category.id} className="text-gray-800">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
