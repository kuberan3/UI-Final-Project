import axios from "axios";


export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";


export const fetchDataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});


export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());


    const authToken = "eyJhbGciOiJFUzI1NiJ9.eyJzZXNzaW9uX2tleSI6IllpNlhFVC9raHMvQmhTMlVwQjVreVNWWTY5eVd5S3l6NlVocjN6UDUvL1pDUWJsNWVIZjc3SWRPdmVVVkhOSGZyUHNybVpHM2tuR3E0ZzNsIiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMTAgMDc6MDk6MzEgVVRDIn0.nOv8GtsYkFAygTqWXnsgyawpNWhFqVNBLx5jt57Rxdqc129CvcpLVezjjj_LVasYg5d4q-cc5OMdfPKPLqxF_w";

    const pagetoken =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6MzU0NTMzMTA4NH0.ff2mjQatAoN387MEaLdsQnrj7engq3eBNjDkYlGDcr0";
    const axiosInstance = axios.create({
      baseURL:
        "https://api.preprod.experience.com/v2/core/dashboard/10017/tier_overview",
      headers: {
        Authorization: authToken,
        "Page-Token": pagetoken,
      },
    });

    try {
      axiosInstance
      .get("")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      }) 
    }
   catch(error){
      console.error("Error fetching data:", error);
    dispatch(fetchDataFailure(error.message));
   }

  };
};


