import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../reduxutils/hooks"
import { Navigate } from "react-router-dom"
import {
  selectFetchProductsLoading,
  selectFetchAllProducts,
  selectFetchAllProductsError,
  selectFetchAllProductsSuccess,
  productsFetchAllAsync,
} from "../../reduxfeatures/product/productSlice"
import {
  selectAuthUser,
  selectUserLoggedIn,
} from "../../reduxfeatures/auth/authSlice"
import Navigation from "../organisms/navigation/navigation"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


import {
  clearLocalStorage,
} from "../../utils/local-storage"

import {persistor} from '../../reduxutils/store'

export default function ProductPageTemplate({
  heading,
  subHeading,
}: {
  heading: string
  subHeading: string
}) {
  const dispatch = useAppDispatch()
  const isSuccess = useAppSelector(selectFetchAllProductsSuccess)
  const error = useAppSelector(selectFetchAllProductsError)
  const products = useAppSelector(selectFetchAllProducts)
  const user = useAppSelector(selectAuthUser)
  const isLoggedIn = useAppSelector(selectUserLoggedIn)



  useEffect(() => {
    dispatch(productsFetchAllAsync())
  }, [])

  if (error === 'Unauthorized') {
    persistor.purge();
    clearLocalStorage()
    return <Navigate to="/login" />
  }

  if (!isSuccess) {
    return (
      <>
        <Navigation isLogin={isLoggedIn} user={user} />
        <Container>
          <Row>
            <Col>{error}</Col>
          </Row>
        </Container>
      </>
    )
  }

  return (
    <>
      <Navigation isLogin={isLoggedIn} user={user} />
      <Container>
        <Row>
          <Col>{heading}</Col>
        </Row>
        <Row>
          <Col>
            {subHeading}
          </Col>
          <Col>{subHeading}{products && products.map((item:any,i)=><li key={i}>{item.product_name}</li>)}</Col>
        </Row>
      </Container>
    </>
  )
}
