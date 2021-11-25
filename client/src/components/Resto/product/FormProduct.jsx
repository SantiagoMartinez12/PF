import './FormProduct.css'
// import logo from "../../../assets/Logo.png";

const FormProduct = () => {

    return (
        <>
            <form action="">
                <div class="grid-container">
                    <div class="nav">
                        {/* <img src={logo} alt="Logo" width="30%" /> */}
                    </div>
                    <div class="subNav"></div>


                    <div class="producto">
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" />
                    </div>

                    <div class="categoria">
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" />
                    </div>

                    <div class="precio">
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" />
                    </div>

                    <div class="peso">
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" />
                    </div>

                    <div class="marca">
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" />
                    </div>

                    <div class="descripcion">
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" />
                    </div>

                    <div class="imagen">
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" />
                    </div>

                    <div class="submit">
                        <button type='submit'></button>
                    </div>
                    <div class="deleteSearch"></div>
                    <div class="deleteList"></div>
                    <div class="goBack"></div>
                    <div class="footer"></div>
                </div>
            </form>
        </>
    )
}

export default FormProduct;