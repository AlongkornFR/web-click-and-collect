from django.db import models

class Categorie(models.Model):
    nom = models.CharField(max_length=255)
    # image_url peut être nul comme convenu
    image_url = models.URLField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.nom

class Produit(models.Model):
    nom = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    ingredients = models.TextField(blank=True, null=True)
    # Utilisation de Decimal(10,2) pour la précision financière
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    quantite_info = models.CharField(max_length=100, blank=True, null=True)
    # Images optionnelles pour l'éco-conception
    image_vignette = models.URLField(max_length=255, blank=True, null=True)
    image_grande = models.URLField(max_length=255, blank=True, null=True)
    
    categorie = models.ForeignKey(Categorie, on_delete=models.CASCADE, related_name='produits')

    def __str__(self):
        return self.nom

class Commande(models.Model):
    nom_client = models.CharField(max_length=255)
    email_client = models.EmailField()
    total_prix = models.DecimalField(max_digits=10, decimal_places=2)
    statut = models.CharField(max_length=50, default='En préparation')
    date_retrait_prevue = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

class LigneCommande(models.Model):
    commande = models.ForeignKey(Commande, on_delete=models.CASCADE, related_name='lignes')
    produit = models.ForeignKey(Produit, on_delete=models.PROTECT)
    quantite = models.PositiveIntegerField(default=1)
    prix_unitaire = models.DecimalField(max_digits=10, decimal_places=2)