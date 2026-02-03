from django.db import models

class Categorie(models.Model):
    nom = models.CharField(max_length=100)
    # On ajoute une image pour la catégorie (ex: une icône de California)
    image_url = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.nom

class Produit(models.Model):
    categorie = models.ForeignKey(Categorie, on_delete=models.CASCADE, related_name='produits')
    nom = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    ingredients = models.TextField(blank=True, help_text="Liste des ingrédients pour les allergènes")
    
    # Prix en euros
    prix = models.DecimalField(max_digits=6, decimal_places=2)
    
    # Infos spécifiques (ex: "6 pièces" ou "la paire")
    quantite_info = models.CharField(max_length=50, blank=True, help_text="ex: 6 pièces")
    
    # URLs des images (plus simple que de gérer les fichiers en local pour l'instant)
    image_vignette = models.URLField(max_length=500, blank=True, null=True) # Pour la liste
    image_grande = models.URLField(max_length=500, blank=True, null=True)   # Pour le détail
    
    def __str__(self):
        return f"{self.nom} ({self.categorie.nom})"

class Commande(models.Model):
    # Statuts possibles pour le Click & Collect
    STATUT_CHOICES = [
        ('EN_ATTENTE', 'En attente'),
        ('PREPARATION', 'En préparation'),
        ('PRET', 'Prêt au retrait'),
        ('TERMINE', 'Terminé'),
        ('ANNULE', 'Annulé'),
    ]
    
    nom_client = models.CharField(max_length=100)
    email_client = models.EmailField()
    total_prix = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    statut = models.CharField(max_length=20, choices=STATUT_CHOICES, default='EN_ATTENTE')
    date_commande = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Commande #{self.id} - {self.nom_client}"

class LigneCommande(models.Model):
    # La table de liaison dont on parlait tout à l'heure !
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE, related_name='lignes')
    produit = models.ForeignKey(Produit, on_delete=models.SET_NULL, null=True)
    quantite = models.PositiveIntegerField(default=1)
    # On enregistre le prix au moment de l'achat (le "figement")
    prix_unitaire = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"{self.quantite}x {self.produit.nom if self.produit else 'Produit supprimé'}"