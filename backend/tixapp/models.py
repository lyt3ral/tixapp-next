from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    city = models.CharField(max_length=50, default="No City")
    name = models.CharField(max_length=50, default="Anonymous")

class Venue(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField(default="No Address Specified")
    city = models.CharField(max_length=50)
    capacity = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=50, unique=True)
    
    def __str__(self):
        return self.name

class Movie(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(default="No Description Available")
    poster = models.ImageField(upload_to='images/', default='images/poster.jpg')
    rating = models.FloatField(default=0.0)
    genre = models.ManyToManyField(Genre)

    def __str__(self):
        return self.name
    
class Show(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
    time = models.TimeField()

class Ticket(models.Model):
    show = models.ForeignKey(Show, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)