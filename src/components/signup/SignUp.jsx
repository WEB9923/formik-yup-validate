import {useFormik} from "formik";
import "./SignUp.scss";
import {SignUpSchema} from "../../schemas/SignUpSchema.js";
export default function SignUp() {
    const onSubmit = async (values,actions) => {
        await new Promise((resolve) => setTimeout(resolve,1000));
        console.log(values)
        actions.resetForm();
    }
    const {handleChange,
        values,
        handleSubmit,
        errors,
        isSubmitting,
        handleBlur,
        touched
    } = useFormik({
        initialValues:{
            name:"",
            lastname:"",
            username:"",
            email:"",
            age:"",
            password:"",
        },
        validationSchema: SignUpSchema,
        onSubmit
    });
    return (
        <>
            <form
                onSubmit={handleSubmit}
                autoComplete={"off"}
            >
                <h1>sign up</h1>
                <div className="form-wrapper">
                    <div className="form-control">
                        <label htmlFor="name">name</label>
                        <div className="input-field">
                            <input
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                id="name"
                                placeholder="name"
                                className={errors.name && touched.name && "error-input"}
                            />
                        </div>
                        {errors.name && touched.name && <p className="error-text">{errors.name}</p>}
                    </div>
                    <div className="form-control">
                        <label htmlFor="lastname">lastname</label>
                        <div className="input-field">
                            <input
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                id="lastname"
                                placeholder="lastname"
                                className={errors.lastname && touched.lastname && "error-input"}
                            />
                        </div>
                        {errors.lastname && touched.lastname && <p className="error-text">{errors.lastname}</p>}
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">username</label>
                        <div className="input-field">
                            <input
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                id="username"
                                placeholder="username"
                                className={errors.username && touched.username && "error-input"}
                            />
                        </div>
                        {errors.username && touched.username && <p className="error-text">{errors.username}</p>}
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">email</label>
                        <div className="input-field">
                            <input
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                id="email"
                                placeholder="email"
                                className={errors.email && touched.email && "error-input"}
                            />
                        </div>
                        {errors.email && touched.email && <p className="error-text">{errors.email}</p>}
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">age</label>
                        <div className="input-field">
                            <input
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="number"
                                id="age"
                                placeholder="age"
                                min={15}
                                className={errors.age && touched.age && "error-input"}
                            />
                        </div>
                        {errors.age && touched.age && <p className="error-text">{errors.age}</p>}
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">password</label>
                        <div className="input-field">
                            <input
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="password"
                                id="password"
                                placeholder="password"
                                className={errors.password && touched.password && "error-input"}
                            />
                        </div>
                        {errors.password && touched.password && <p className="error-text">{errors.password}</p>}
                    </div>
                    <div className="form-control">
                        <button type="submit">{isSubmitting ? "loading..." : "sign up"}</button>
                    </div>
                </div>
            </form>
        </>
    );
}

