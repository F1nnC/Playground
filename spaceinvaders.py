#RFRNCE

import os
import math
import random
import turtle

# Set up the screen
window = turtle.Screen()
window.title("Space Invaders")
window.bgcolor("black")
window.setup(width=800, height=600)
window.tracer(0)

# Register the shapes
turtle.register_shape("player.gif")
turtle.register_shape("enemy.gif")

# Draw the player
player = turtle.Turtle()
player.shape("player.gif")
player.penup()
player.speed(0)
player.color("white")
player.goto(0, -250)
player.direction = "stop"

# Create the player's bullet
bullet = turtle.Turtle()
bullet.shape("triangle")
bullet.penup()
bullet.speed(0)
bullet.color("yellow")
bullet.shapesize(0.5, 0.5)
bullet.hideturtle()
bullet.goto(0, -240)
bullet.direction = "stop"
bullet.state = "ready"

# Create the enemies
enemies = []
num_enemies = 5

for i in range(num_enemies):
    enemy = turtle.Turtle()
    enemy.shape("enemy.gif")
    enemy.penup()
    enemy.speed(0)
    enemy.color("red")
    x = random.randint(-200, 200)
    y = random.randint(100, 250)
    enemy.goto(x, y)
    enemy.direction = "left"
    enemies.append(enemy)

# Create the score display
score = 0
score_display = turtle.Turtle()
score_display.speed(0)
score_display.color("white")
score_display.penup()
score_display.hideturtle()
score_display.goto(-350, 260)
score_display.write("Score: {}".format(score), align="left", font=("Courier", 14, "normal"))

# Functions to move the player
def move_left():
    player.direction = "left"

def move_right():
    player.direction = "right"

def stop_move():
    player.direction = "stop"

def fire_bullet():
    if bullet.state == "ready":
        bullet.state = "fire"
        x = player.xcor()
        y = player.ycor() + 10
        bullet.goto(x, y)
        bullet.showturtle()

# Keyboard bindings
window.listen()
window.onkeypress(move_left, "Left")
window.onkeypress(move_right, "Right")
window.onkeypress(fire_bullet, "space")
window.onkeyrelease(stop_move, "Left")
window.onkeyrelease(stop_move, "Right")

# Game loop
while True:
    window.update()

    # Move the player
    if player.direction == "left":
        x = player.xcor()
        x -= 3
        player.setx(x)

    if player.direction == "right":
        x = player.xcor()
        x += 3
        player.setx(x)

    # Move the bullet
    if bullet.state == "fire":
        y = bullet.ycor()
        y += 5
        bullet.sety(y)

    # Check for bullet collision with enemy
    for enemy in enemies:
        if bullet.distance(enemy) < 20:
            bullet.hideturtle()
            bullet.state = "ready"
            bullet.goto(0, -240)
            enemy.goto(random.randint(-200, 200), random.randint(100, 250))
            score += 10
            score_display.clear()
