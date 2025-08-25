using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Repositories.Implementation;
using WebApplication1.Repositories.Interface;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Swagger/OpenAPI configuration
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register DbContext and Repository
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("AppDBConnectionString"));
});
builder.Services.AddScoped<IStudentRepository, StudentRepository>();

// CORS configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // ? Only origin, not path
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// ? Apply CORS before Authorization
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();


