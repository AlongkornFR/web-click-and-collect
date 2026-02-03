from rest_framework import viewsets
from .models import Categorie, Produit, Commande, LigneCommande
from .serializers import CategorieSerializer, ProduitSerializer, CommandeSerializer

class CategorieViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Cette vue permet d'afficher la liste des catégories de sushis.
    """
    queryset = Categorie.objects.all()
    serializer_class = CategorieSerializer

class ProduitViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Cette vue permet d'afficher la liste des produits.
    """
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer

class CommandeViewSet(viewsets.ModelViewSet):
    """
    Cette vue permet de créer une nouvelle commande (POST) 
    et de voir les commandes passées.
    """
    queryset = Commande.objects.all()
    serializer_class = CommandeSerializer