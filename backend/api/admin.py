from django.contrib import admin
from .models import Categorie, Produit, Commande, LigneCommande

@admin.register(Categorie)
class CategorieAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom')

@admin.register(Produit)
class ProduitAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prix', 'categorie', 'quantite_info')
    list_filter = ('categorie',)
    search_fields = ('nom',)

admin.site.register(Commande)
admin.site.register(LigneCommande)