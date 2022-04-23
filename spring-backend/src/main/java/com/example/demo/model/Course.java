package com.example.demo.model;

import java.util.Date;
import javax.persistence.*;
import java.io.Serializable;

	@Entity
	public class Course implements Serializable {
		@Id
		 @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(nullable = false, updatable = false)
		private long id;
		
		private Date Date_creation;
		
		private String Image;
		
		@Override
		public String toString() {
			return "Course [id=" + id + ", Date_creation=" + Date_creation + ", Image=" + Image + ", Categorie="
					+ Categorie + "]";
		}
		public Course(long id, Date date_creation, String image, String categorie) {
			super();
			this.id = id;
			Date_creation = date_creation;
			Image = image;
			Categorie = categorie;
		}
		public Course() {
			
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public Date getDate_creation() {
			return Date_creation;
		}
		public void setDate_creation(Date date_creation) {
			Date_creation = date_creation;
		}
		public String getImage() {
			return Image;
		}
		public void setImage(String image) {
			Image = image;
		}
		public String getCategorie() {
			return Categorie;
		}
		public void setCategorie(String categorie) {
			Categorie = categorie;
		}
		@Column(name="Categorie")
		private String Categorie;
		
		
}
