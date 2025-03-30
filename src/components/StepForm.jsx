'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../app/StepForm.module.css';
import { updateTextSize, enableScreenReader, disableScreenReader, speakContent } from './accesibility';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../app/firebase/config.js";
import { translations } from '../utils/translations';

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

    const t = (key, params = {}) => {
        const lang = formData.language || 'es';
        let text = translations[lang][key] || key;
        Object.entries(params).forEach(([param, value]) => {
            text = text.replace(`{${param}}`, value);
        });
        return text;
    };

    const handleMouseOver = (text) => {
        if (document.getElementById('screenReader')?.checked) {
            speakContent(text);
        }
    };

    const validateStep = (step) => {
        const validations = {
            1: () => {
                if (!formData.language) {
                    alert(t('pleaseSelectLanguage'));
                    return false;
                }
                return true;
            },
            2: () => true,
            3: () => {
                if (formData.interests.length === 0) {
                    alert(t('pleaseSelectInterests'));
                    return false;
                }
                return true;
            },
            4: () => {
                if (!formData.email || !formData.password) {
                    alert(t('pleaseCompleteFields'));
                    return false;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    alert(t('invalidEmail'));
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
        handleMouseOver(t('languageSelected', { language: lang === 'en' ? 'English' : 'Español' }));
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
            ? t('interestRemoved', { interest: t(`interests.${interest}`) })
            : t('interestAdded', { interest: t(`interests.${interest}`) })
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (value) handleMouseOver(`${name === 'password' ? 'Contraseña' : 'Email'}: ${value}`);
    };

    const interests = [
        { name: 'Innovation', icon: '💡' },
        { name: 'Strategy', icon: '🎯' },
        { name: 'Collaboration', icon: '🤝' },
        { name: 'Productivity', icon: '⚡' },
        { name: 'Leadership', icon: '👥' },
        { name: 'Other', icon: '🔄' }
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
       <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }} >
         <div className={styles.formContainer}>
            {isLoading && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.loadingSpinner}></div>
                </div>
            )}
            <div className={styles.progressBar} onMouseOver={() => handleMouseOver(t('stepOf', { current: currentStep, total: 4 }))}>
                {[1, 2, 3, 4].map((step) => (
                    <div
                        key={step}
                        className={`${styles.step} ${currentStep >= step ? styles.active : ''}`}
                        onMouseOver={() => handleMouseOver(t('step', { step }))}
                    >
                        {step}
                    </div>
                ))}
                <div className={styles.progress} style={{ width: `${((currentStep - 1) / 3) * 100}%` }} />
            </div>

            <form className={styles.stepForm} onSubmit={handleSubmit}>
                {/* Step 1: Language Selection */}
                <div className={`${styles.formStep} ${currentStep === 1 ? styles.active : ''}`}>
                    <h2 onMouseOver={() => handleMouseOver(t('selectLanguage'))}>{t('selectLanguage')}</h2>
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
                    <h2 onMouseOver={() => handleMouseOver(t('accessibility'))}>
                        {t('accessibility')}
                    </h2>
                    <div className={styles.accessibilityControls}>
                        {/* High Contrast Option */}
                        <div
                            className={styles.accessibilityOption}
                            onMouseOver={() => handleMouseOver(t('highContrast'))}
                            aria-label={t('highContrast')}
                        >
                            <div className={styles.optionLabel}>
                                <span className={styles.contrastIcon}>🌓</span>
                                <span>{t('highContrast')}</span>
                            </div>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    id="highContrast"
                                    onChange={(e) => {
                                        document.body.classList.toggle('high-contrast', e.target.checked);
                                        handleMouseOver(t(e.target.checked ? 'highContrastEnabled' : 'highContrastDisabled'));
                                    }}
                                    aria-label={t('highContrast')}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>

                        {/* Screen Reader Option */}
                        <div
                            className={styles.accessibilityOption}
                            onMouseOver={() => handleMouseOver(t('screenReader'))}
                            aria-label={t('screenReader')}
                        >
                            <div className={styles.optionLabel}>
                                <span className={styles.readerIcon}>🔊</span>
                                <span>{t('screenReader')}</span>
                            </div>
                            <label className={styles.switch}>
                                <input
                                    type="checkbox"
                                    id="screenReader"
                                    onChange={(e) => {
                                        e.target.checked ? enableScreenReader() : disableScreenReader();
                                        handleMouseOver(t(e.target.checked ? 'screenReaderEnabled' : 'screenReaderDisabled'));
                                    }}
                                    aria-label={t('screenReader')}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>

                        {/* Font Size Controls */}
                        <div
                            className={styles.accessibilityOption}
                            onMouseOver={() => handleMouseOver(t('fontSize'))}
                            aria-label={t('fontSize')}
                        >
                            <div className={styles.optionLabel}>
                                <span className={styles.fontIcon}>Aa</span>
                                <span>{t('fontSize')}</span>
                            </div>
                            <div className={styles.textSizeButtons}>
                                {['14px', '16px', '18px'].map(size => (
                                    <button
                                        key={size}
                                        type="button"
                                        className={styles.sizeBtn}
                                        onClick={() => {
                                            updateTextSize(size);
                                            handleMouseOver(t('textSize', { size }));
                                        }}
                                        aria-label={t('textSize', { size })}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Paso 3: Intereses */}
                <div className={`${styles.formStep} ${currentStep === 3 ? styles.active : ''}`}>
                    <h2 onMouseOver={() => handleMouseOver(t('selectInterests'))}>
                        {t('selectInterests')}
                    </h2>
                    <div className={styles.interestGrid}>
                        {interests.map((interest) => (
                            <div
                                key={interest.name}
                                className={`${styles.interestCard} ${formData.interests.includes(interest.name) ? styles.selected : ''}`}
                                onClick={() => handleInterestToggle(interest.name)}
                                onMouseOver={() => handleMouseOver(t(formData.interests.includes(interest.name) ? 'interestRemoved' : 'interestAdded', { interest: t(`interests.${interest.name}`) }))}

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
                                <span className={styles.interestText}>{t('interests')[interest.name]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Paso 4: Login */}
                <div className={`${styles.formStep} ${currentStep === 4 ? styles.active : ''}`}>
                    <h2 onMouseOver={() => handleMouseOver(t('signIn'))}>{t('signIn')}</h2>
                    <p className={styles.welcomeText} onMouseOver={() => handleMouseOver(t('welcomeBack'))}>
                        {t('welcomeBack')}
                    </p>

                    <div className={styles.formGroup}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={t('email')}
                            className={styles.formInput}
                            onMouseOver={() => handleMouseOver(t('email'))}
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
                                placeholder={t('password')}
                                className={styles.formInput}
                                onMouseOver={() => handleMouseOver(t('password'))}
                            />
                            <button
                                type="button"
                                className={styles.passwordToggle}
                                onClick={() => {
                                    const input = document.getElementById('password');
                                    const newType = input.type === 'password' ? 'text' : 'password';
                                    input.type = newType;
                                    handleMouseOver(t(newType === 'text' ? 'passwordVisible' : 'passwordHidden'));
                                }}
                                onMouseOver={() => handleMouseOver(t('togglePassword'))}
                            >
                                👁️
                            </button>
                        </div>
                    </div>

                    <div className={styles.rememberForgot}>
                        <label
                            className={styles.rememberMe}
                            onMouseOver={() => handleMouseOver(t('rememberMe'))}
                        >
                            <input
                                type="checkbox"
                                onChange={(e) => handleMouseOver(t(e.target.checked ? 'rememberMeEnabled' : 'rememberMeDisabled'))}
                            />
                            <span>{t('rememberMe')}</span>
                        </label>
                        <a
                            href="#"
                            className={styles.forgotPassword}
                            onMouseOver={() => handleMouseOver(t('forgotPassword'))}
                        >
                            {t('forgotPassword')}
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
                        <img src="/media/google.webp" alt="" role="presentation" />
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
                {currentStep > 1 && (
                    <button
                        type="button"
                        className={styles.prevBtn}
                        onClick={handlePrev}
                        onMouseOver={() => handleMouseOver(t('previous'))}
                        aria-label={t('previous')}
                    >
                        {t('previous')}
                    </button>
                )}
                <button
                    type="button"
                    className={styles.nextBtn}
                    onClick={currentStep === 4 ? handleSubmit : handleNext}
                    onMouseOver={() => handleMouseOver(t('next'))}
                    aria-label={t('next')}
                >
                    {t('next')}
                </button>
            </div>
        </div>
       </div>
    );
}