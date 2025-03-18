'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../app/StepForm.module.css';
import { updateTextSize, enableScreenReader, disableScreenReader, speakContent } from './accesibility';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../app/firebase/config.js";

export default function StepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        language: '',
        interests: [],
        email: '',
        password: ''
    });

    const handleMouseOver = (text) => {
        if (document.getElementById('screenReader')?.checked) {
            speakContent(text);
        }
    };

    const validateStep = (step) => {
        const validations = {
            1: () => {
                if (!formData.language) {
                    alert('Por favor selecciona un idioma');
                    return false;
                }
                return true;
            },
            2: () => true,
            3: () => {
                if (formData.interests.length === 0) {
                    alert('Por favor selecciona al menos un tema de interés');
                    return false;
                }
                return true;
            },
            4: () => {
                if (!formData.email || !formData.password) {
                    alert('Por favor completa todos los campos');
                    return false;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    alert('Por favor ingresa un email válido');
                    return false;
                }
                return true;
            }
        };
        return validations[step]?.() ?? true;
    };


    const handlePrev = () => currentStep > 1 && setCurrentStep(prev => prev - 1);

    const handleLanguageChange = (lang) => {
        setFormData(prev => ({ ...prev, language: lang }));
        handleMouseOver(lang === 'es' ? 'Has seleccionado Español' : 'You have selected English');
    };

    const handleInterestToggle = (interest) => {
        const isSelected = formData.interests.includes(interest);
        setFormData(prev => ({
            ...prev,
            interests: isSelected
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
        handleMouseOver(isSelected
            ? `Has eliminado ${interest} de tus temas de interés`
            : `Has seleccionado ${interest} como tema de interés`
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (value) handleMouseOver(`${name === 'password' ? 'Contraseña' : 'Email'}: ${value}`);
    };

    const interests = [
        { name: 'Technology', icon: '💻' },
        { name: 'Sports', icon: '⚽' },
        { name: 'Music', icon: '🎵' },
        { name: 'Art', icon: '🎨' },
        { name: 'Travel', icon: '✈️' },
        { name: 'Food', icon: '🍽️' }
    ];
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentStep === 4) {
            setIsLoading(true);
            try {
                // Try to create new user first
                const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                // Store additional user data
                const user = result.user;
                const userProfile = {
                    email: formData.email,
                    language: formData.language,
                    interests: formData.interests
                };
                // You can store additional user data in Firestore here if needed
                console.log("Successfully registered and logged in:", user);
                router.push('/home');
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    try {
                        // If user exists, try to sign in
                        const result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
                        console.log("Successfully logged in with email:", result.user);
                        router.push('/home');
                    } catch (signInError) {
                        console.error("Error signing in:", signInError);
                        alert("Invalid email or password");
                    }
                } else {
                    console.error("Error during registration:", error);
                    alert("Error creating account. Please try again.");
                }
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Successfully logged in:", result.user);
            router.push('/home');
        } catch (error) {
            console.error("Error signing in with Google:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            if (currentStep < 4) {
                setCurrentStep(prev => prev + 1);
            }
        }
    };




    return (
        <div className={styles.formContainer}>
            {isLoading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.loadingSpinner}></div>
                </div>
            )}
            <div className={styles.progressBar} onMouseOver={() => handleMouseOver(`Paso ${currentStep} de 4`)}>
                {[1, 2, 3, 4].map((step) => (
                    <div
                        key={step}
                        className={`${styles.step} ${currentStep >= step ? styles.active : ''}`}
                        onMouseOver={() => handleMouseOver(`Paso ${step}`)}
                    >
                        {step}
                    </div>
                ))}
                <div className={styles.progress} style={{ width: `${((currentStep - 1) / 3) * 100}%` }} />
            </div>

            <form className={styles.stepForm} onSubmit={handleSubmit}>
                {/* Paso 1: Selección de idioma */}
                <div className={`${styles.formStep} ${currentStep === 1 ? styles.active : ''}`}>
                    <h2 onMouseOver={() => handleMouseOver("Selecciona tu idioma")}>Selecciona tu idioma</h2>
                    <div className={styles.languageOptions}>
                        {[
                            { value: 'es', label: 'Español' },
                            { value: 'en', label: 'English' }
                        ].map(lang => (
                            <label
                                key={lang.value}
                                className={styles.languageOption}
                                onMouseOver={() => handleMouseOver(lang.label)}
                            >
                                <input
                                    type="radio"
                                    name="language"
                                    value={lang.value}
                                    checked={formData.language === lang.value}
                                    onChange={(e) => handleLanguageChange(e.target.value)}
                                />
                                <span className={styles.radioCircle}></span>
                                {lang.label}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Paso 2: Preferencias de accesibilidad */}
                <div className={`${styles.formStep} ${currentStep === 2 ? styles.active : ''}`}>
                    <h2 onMouseOver={() => handleMouseOver("Accessibility Preferences")}>
                        Accessibility Preferences
                    </h2>
                    <div className={styles.accessibilityControls}>
                        {/* High Contrast Option */}
                        <div
                            className={styles.accessibilityOption}
                            onMouseOver={() => handleMouseOver("High Contrast Option")}
                        >
                            <div className={styles.optionLabel}>
                                <span className={styles.contrastIcon}>🌓</span>
                                <span>High Contrast</span>
                            </div>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    id="highContrast"
                                    onChange={(e) => {
                                        document.body.classList.toggle('high-contrast', e.target.checked);
                                        handleMouseOver(e.target.checked ? "High contrast enabled" : "High contrast disabled");
                                    }}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>

                        {/* Text Size Option */}
                        <div
                            className={styles.accessibilityOption}
                            onMouseOver={() => handleMouseOver("Text Size Options")}
                        >
                            <div className={styles.optionLabel}>
                                <span className={styles.textIcon}>Aa</span>
                                <span>Text Size</span>
                            </div>
                            <div className={styles.textSizeButtons}>
                                {[
                                    { size: '0.9rem', label: 'A-' },
                                    { size: '1rem', label: 'A' },
                                    { size: '1.2rem', label: 'A+' }
                                ].map(({ size, label }) => (
                                    <button
                                        key={label}
                                        type="button"
                                        className={styles.sizeBtn}
                                        onClick={() => updateTextSize(size)}
                                        onMouseOver={() => handleMouseOver(`Text size ${label}`)}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Screen Reader Option */}
                        <div
                            className={styles.accessibilityOption}
                            onMouseOver={() => handleMouseOver("Screen Reader Option")}
                        >
                            <div className={styles.optionLabel}>
                                <span className={styles.readerIcon}>🔊</span>
                                <span>Screen Reader</span>
                            </div>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    id="screenReader"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            enableScreenReader();
                                            handleMouseOver("Screen reader enabled");
                                        } else {
                                            disableScreenReader();
                                            handleMouseOver("Screen reader disabled");
                                        }
                                    }}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Paso 3: Intereses */}
                <div className={`${styles.formStep} ${currentStep === 3 ? styles.active : ''}`}>
                    <h2 onMouseOver={() => handleMouseOver("Selecciona tus temas de interés")}>
                        Selecciona tus temas de interés
                    </h2>
                    <div className={styles.interestGrid}>
                        {interests.map((interest) => (
                            <div
                                key={interest.name}
                                className={`${styles.interestCard} ${formData.interests.includes(interest.name) ? styles.selected : ''}`}
                                onClick={() => handleInterestToggle(interest.name)}
                                onMouseOver={() => handleMouseOver(`${interest.name} ${formData.interests.includes(interest.name) ? 'selected' : ''}`)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleInterestToggle(interest.name);
                                    }
                                }}
                                tabIndex={0}
                                role="checkbox"
                                aria-checked={formData.interests.includes(interest.name)}
                            >
                                <div className={styles.interestIcon}>{interest.icon}</div>
                                <span className={styles.interestText}>{interest.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Paso 4: Login */}
                <div className={`${styles.formStep} ${currentStep === 4 ? styles.active : ''}`}>
                    <h2 onMouseOver={() => handleMouseOver("Welcome back")}>Welcome</h2>
                    <p className={styles.welcomeText} onMouseOver={() => handleMouseOver("We are happy to have you back")}>
                        We are happy to have you back!
                    </p>

                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email or phone"
                            className={styles.formInput}
                            onMouseOver={() => handleMouseOver("Email input field")}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <div className={styles.passwordContainer}>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className={styles.formInput}
                                onMouseOver={() => handleMouseOver("Password input field")}
                            />
                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={() => {
                                    const input = document.getElementById('password');
                                    const newType = input.type === 'password' ? 'text' : 'password';
                                    input.type = newType;
                                    handleMouseOver(newType === 'text' ? "Password visible" : "Password hidden");
                                }}
                                onMouseOver={() => handleMouseOver("Toggle password visibility")}
                            >
                                👁️
                            </button>
                        </div>
                    </div>

                    <div className={styles.rememberForgot}>
                        <label
                            className={styles.rememberMe}
                            onMouseOver={() => handleMouseOver("Remember me option")}
                        >
                            <input
                                type="checkbox"
                                onChange={(e) => handleMouseOver(e.target.checked ? "Remember me enabled" : "Remember me disabled")}
                            />
                            <span>Remember me</span>
                        </label>
                        <a
                            href="#"
                            className={styles.forgotPassword}
                            onMouseOver={() => handleMouseOver("Forgot password link")}
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className={styles.signInButton}
                        onMouseOver={() => handleMouseOver("Sign in button")}
                    >
                        Sign in
                    </button>


                    <div
                        className={styles.divider}
                        role="separator"
                        onMouseOver={() => handleMouseOver("or continue with")}
                    >
                        <span>Or</span>
                    </div>

                    <button
                        type="button"
                        className={styles.socialButton}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleGoogleSignIn(e);
                        }}
                        onMouseOver={() => handleMouseOver("Sign in with Google button")}
                    >
                        <img src="/google-icon.png" alt="" role="presentation" />
                        Sign in with Google
                    </button>


                    {/* <button
                        type="button"
                        className={styles.socialButton}
                        onClick={handleAppleSignIn}
                        onMouseOver={() => handleMouseOver("Sign in with Apple button")}
                    >
                        <img src="/apple-icon.png" alt="" role="presentation" />
                        Sign in with Apple
                    </button> */}
                </div>
            </form>

            <div className={styles.buttonContainer}>
                {currentStep > 1 && currentStep < 4 && (
                    <button
                        onClick={handlePrev}
                        className={styles.prevBtn}
                        onMouseOver={() => handleMouseOver("Previous step button")}
                    >
                        Anterior
                    </button>
                )}
                {currentStep < 4 && (
                    <button
                        onClick={handleNext}
                        className={styles.nextBtn}
                        onMouseOver={() => handleMouseOver("Next step")}
                    >
                        Siguiente
                    </button>
                )}
            </div>
        </div>
    );
}