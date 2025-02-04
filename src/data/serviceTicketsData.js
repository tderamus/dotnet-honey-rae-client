const _apiUrl = "/api/servicetickets";

export const getServiceTickets = async () => {
  const response = await fetch("http://localhost:5001/api/serviceTickets/");
  if (!response.ok) {
    throw new Error("Failed to fetch service tickets");
  }
  return response.json();
};



//export a function here that gets a ticket by id
export async function getServiceTicketsById(id) {
  try {
    const response = await fetch(`/api/servicetickets/${id}`);

    if(!response.ok){
      throw new Error(`Failed to fetch service ticket with ID ${id}`)
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching service ticket:", error);
    return null;
  }
 
} 
