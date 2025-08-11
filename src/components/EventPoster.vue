<template>
  <div class="event-poster">
    <!-- Main Title -->
    <div class="title-section">
      <h1 class="main-title">AD ASTRA</h1>
      <h2 class="university-title">VILNIAUS UNIVERSITETE</h2>
      <h3 class="university-subtitle">IN VILNIUS UNIVERSITY</h3>
    </div>

    <!-- Event Description -->
    <div class="event-description">
      <p class="festival-title">Studentų (-čių) integracijos festivalis</p>
      <p class="festival-subtitle">Students' Integration Festival</p>
    </div>

    <!-- Date -->
    <div class="date-section">
      <span class="date">09.05</span>
    </div>

    <!-- Building Illustration Placeholder -->
    <div class="building-section">
      <div class="building-placeholder">
        <div class="building-main"></div>
        <div class="building-tower"></div>
        <div class="building-details"></div>
      </div>
    </div>

    <!-- Organizers Section -->
    <div class="organizers-section">
      <p class="organizers-label">Organizatoriai:</p>
      <div class="organizer-logos">
        <div class="logo-placeholder">
          <img src="@/assets/logo.png" alt="Vilnius University Logo" class="university-logo" />
          <div class="logo-text">
            <p>Vilniaus universiteto</p>
            <p>Studentų atstovybė</p>
          </div>
        </div>
        <div class="logo-placeholder">
          <img src="@/assets/logo.png" alt="Vilnius University Logo" class="university-logo" />
          <div class="logo-text">
            <p>Vilniaus</p>
            <p>universitetas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.event-poster {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  color: white;
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Title Section */
.title-section {
  text-align: left;
  margin-bottom: 40px;
}

.main-title {
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 900;
  background: linear-gradient(135deg, #FFD700 0%, #FF8C00 50%, #FF4500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
}

.university-title {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  color: white;
  margin: 10px 0 5px 0;
  letter-spacing: 0.1em;
}

.university-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  letter-spacing: 0.05em;
}

/* Event Description */
.event-description {
  margin-bottom: 40px;
}

.festival-title {
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 300;
  color: white;
  margin: 0 0 5px 0;
  line-height: 1.3;
}

.festival-subtitle {
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.3;
}

/* Date Section */
.date-section {
  position: absolute;
  left: 20px;
  bottom: 200px;
}

.date {
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #FFD700 0%, #FF8C00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

/* Building Section */
.building-section {
  position: absolute;
  right: 0;
  bottom: 100px;
  width: 50%;
  height: 300px;
  overflow: hidden;
}

.building-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, 
    rgba(255, 215, 0, 0.1) 0%, 
    rgba(255, 140, 0, 0.2) 50%, 
    rgba(255, 69, 0, 0.1) 100%);
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.building-main {
  width: 60%;
  height: 80%;
  background: linear-gradient(to top, 
    rgba(255, 215, 0, 0.3) 0%, 
    rgba(255, 140, 0, 0.2) 100%);
  border-radius: 5px 5px 0 0;
  position: relative;
}

.building-tower {
  position: absolute;
  top: 20%;
  left: 30%;
  width: 20%;
  height: 40%;
  background: linear-gradient(to top, 
    rgba(255, 215, 0, 0.4) 0%, 
    rgba(255, 140, 0, 0.3) 100%);
  border-radius: 3px 3px 0 0;
}

.building-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(90deg, 
    rgba(255, 215, 0, 0.5) 0%, 
    rgba(255, 140, 0, 0.3) 50%, 
    rgba(255, 215, 0, 0.5) 100%);
}

/* Organizers Section */
.organizers-section {
  margin-top: auto;
  padding-top: 40px;
}

.organizers-label {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  margin-bottom: 20px;
}

.organizer-logos {
  display: flex;
  gap: 40px;
  align-items: center;
}

.logo-placeholder {
  display: flex;
  align-items: center;
  gap: 15px;
}

.university-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.logo-text {
  color: white;
  font-size: 0.9rem;
  line-height: 1.2;
}

.logo-text p {
  margin: 0;
  font-weight: 300;
}

/* Responsive Design */
@media (max-width: 768px) {
  .event-poster {
    padding: 20px 15px;
  }
  
  .date-section {
    position: relative;
    left: auto;
    bottom: auto;
    margin: 20px 0;
  }
  
  .building-section {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    height: 200px;
    margin: 20px 0;
  }
  
  .organizer-logos {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .organizer-logos {
    gap: 15px;
  }
  
  .logo-placeholder {
    gap: 10px;
  }
  
  .university-logo {
    width: 40px;
    height: 40px;
  }
}
</style>
