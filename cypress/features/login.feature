Feature: Test de la page de connexion

  @smoke
  Scenario: Connexion sur orangeHRM
    Given je suis sur la page orangeHRM
    When je rentre le username correct
    And je rentre le password correct
    And je clique sur le bouton login
    Then je suis redirigé vers le dashboard
