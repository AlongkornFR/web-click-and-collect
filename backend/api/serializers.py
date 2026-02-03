from rest_framework import serializers
from .models import Categorie, Produit, Commande, LigneCommande

class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = '__all__'

class CategorieSerializer(serializers.ModelSerializer):
    produits = ProduitSerializer(many=True, read_only=True)
    class Meta:
        model = Categorie
        fields = ['id', 'nom', 'image_url', 'produits']

class LigneCommandeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LigneCommande
        fields = '__all__'

class CommandeSerializer(serializers.ModelSerializer):
    lignes = LigneCommandeSerializer(many=True, read_only=True)
    class Meta:
        model = Commande
        fields = '__all__'